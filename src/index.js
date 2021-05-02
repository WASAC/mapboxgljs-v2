import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { MapboxStyleSwitcherControl } from "@watergis/mapbox-gl-style-switcher";
import "@watergis/mapbox-gl-style-switcher/styles.css"
import MapboxPopupControl from '@watergis/mapbox-gl-popup';
import '@watergis/mapbox-gl-popup/css/styles.css';
import MapboxPitchToggleControl from '@watergis/mapbox-gl-pitch-toggle-control';
import '@watergis/mapbox-gl-pitch-toggle-control/css/styles.css';
import MapboxLegendControl from "@watergis/mapbox-gl-legend";
import '@watergis/mapbox-gl-legend/css/styles.css';
import { MapboxExportControl } from "@watergis/mapbox-gl-export";
import '@watergis/mapbox-gl-export/css/styles.css';
import MapboxElevationControl from "@watergis/mapbox-gl-elevation";
import '@watergis/mapbox-gl-elevation/css/styles.css';
import MapboxAdminBoundaryControl from "@wasac/mapbox-gl-admin-boundary";
import "@wasac/mapbox-gl-admin-boundary/css/styles.css";
import axios from 'axios';
import config from './config';

(()=>{
    mapboxgl.accessToken = config.accessToken;

    const map = new mapboxgl.Map({
        container: 'map',
        style: config.styles[0].uri,
        center: config.center,
        zoom: config.zoom,
        hash:true,
        attributionControl: false,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.addControl(new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuracy: true},trackUserLocation: true}), 'top-right');
    map.addControl(new MapboxPitchToggleControl({minpitchzoom: 19})); 
    MapboxStyleSwitcherControl.DEFAULT_STYLE = config.styles[0].title;
    map.addControl(new MapboxStyleSwitcherControl(config.styles), 'top-right');
    map.addControl(new MapboxElevationControl(config.elevation.url, config.elevation.options), 'top-right');
    map.addControl(new MapboxExportControl(), 'top-right');
    map.addControl(new mapboxgl.ScaleControl({maxWidth: 80, unit: 'metric'}), 'bottom-left');
    map.addControl(new mapboxgl.AttributionControl({compact: true,customAttribution: config.attribution}), 'bottom-right');
    if (config.popup)map.addControl(new MapboxPopupControl(config.popup.target));
    let legendCtrl;
    if (config.legend){
        legendCtrl = new MapboxLegendControl(config.legend.targets, config.legend.options);
        map.addControl(legendCtrl, 'bottom-left')
    }

    if (config.search){
        axios.get(config.search.url)
        .then(res=>{
            const customerData = res.data;
            function forwardGeocoder(query) {
                var matchingFeatures = [];
                for (var i = 0; i < customerData.features.length; i++) {
                    var feature = customerData.features[i];
                    config.search.target.forEach(v=>{
                        var target = feature.properties[v];
                        if (!target){
                            return;
                        }
                        // handle queries with different capitalization than the source data by calling toLowerCase()
                        if ((target.toString().toLowerCase().search(query.toString().toLowerCase()) !== -1)) {
                            feature['place_name'] = config.search.format(feature.properties);
                            feature['center'] = feature.geometry.coordinates;
                            feature['place_type'] = config.search.place_type;
                            matchingFeatures.push(feature);
                        }
                    })
                }
                return matchingFeatures;
            }
            map.addControl(
                new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    localGeocoder: forwardGeocoder,
                    localGeocoderOnly:true,
                    zoom: config.search.zoom,
                    placeholder: config.search.placeholder,
                    mapboxgl: mapboxgl,
                }),
                'top-left'
            );
            map.addControl(new MapboxAdminBoundaryControl(config.adminBoundary.url), 'top-left');
        });
    };

    //set feature-state for WSS
    let hoverLayers = ['wss', 'pipeline', 'watersource'];
    let hoveredWssId;
    map.on('mousemove', 'wss', function(e) {
        if (e.features.length > 0) {
        if (hoveredWssId) {
            hoverLayers.forEach(layer=>{
                map.setFeatureState(
                    { source: 'assets', sourceLayer: layer, id: hoveredWssId },
                    { hover: false }
                );
            })
        }
        hoveredWssId = e.features[0].id;
        hoverLayers.forEach(layer=>{
            map.setFeatureState(
                { source: 'assets', sourceLayer: layer, id: hoveredWssId },
                { hover: true }
            );
        })
        }
    });
    map.on('mouseleave', 'wss', function() {
        if (hoveredWssId) {
            hoverLayers.forEach(layer=>{
                map.setFeatureState(
                    { source: 'assets', sourceLayer: layer, id: hoveredWssId },
                    { hover: false }
                );
            })
        }
        hoveredWssId = null;
    });
})();