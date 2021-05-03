import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxPopupControl from '@watergis/mapbox-gl-popup';
import '@watergis/mapbox-gl-popup/css/styles.css';
import MapboxPitchToggleControl from '@watergis/mapbox-gl-pitch-toggle-control';
import '@watergis/mapbox-gl-pitch-toggle-control/css/styles.css';
import config from './config';

(()=>{
    mapboxgl.accessToken = config.accessToken;

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'https://wasac.github.io/mapbox-stylefiles/terrain/style.json',
        center: config.center,
        zoom: config.zoom,
        hash:true,
        attributionControl: false,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.addControl(new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuracy: true},trackUserLocation: true}), 'top-right');
    map.addControl(new MapboxPitchToggleControl({minpitchzoom: 19})); 
    map.addControl(new mapboxgl.ScaleControl({maxWidth: 80, unit: 'metric'}), 'bottom-left');
    map.addControl(new mapboxgl.AttributionControl({compact: true,customAttribution: config.attribution}), 'bottom-right');
    if (config.popup)map.addControl(new MapboxPopupControl(config.popup.target));
})();