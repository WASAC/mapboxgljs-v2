const version = 0.6;

module.exports = {
    accessToken : process.env.ACCESSTOKEN,
    attribution : '©WASAC,Ltd.',
    styles : [
        { title: 'Terrain', uri: `https://wasac.github.io/mapbox-stylefiles/terrain/style.json?version=${version}`},
        { title: 'Street', uri: `https://wasac.github.io/mapbox-stylefiles/street/style.json?version=${version}`,}, 
        { title: 'Satellite', uri: `https://wasac.github.io/mapbox-stylefiles/satellite/style.json?version=${version}`},
        { title: 'UN Vector', uri: `https://wasac.github.io/mapbox-stylefiles/unvt/style.json?version=${version}`}
    ],
    center: [30.0291, -2.0032],
    zoom: 9,
    search:{
        url: 'https://wasac.github.io/vt/wss.geojson',
        target: ['wss_name', 'district','po_name'],
        format: (p) => {return `${p.wss_id}-${p.wss_name}, ${p.po_name}, ${p.district}`},
        place_type: ['wss'],
        placeholder: 'Search WSS/PO/District',
        limit: 10,
        zoom: 13,
    },
    popup: {
        target: [
            'handpump','improvedspring','dugwell','solarpump','otherwaterpoint',
            'household','publictap','waterkiosk','industrial','institution','other connection',
            'chamber','reservoir','pumping-station','watersource','pipeline','wss'
        ]
    },
    adminBoundary: {
        url: 'https://wasac.github.io/rw-admin-boundary'
    },
    legend:{
        targets:{
            'village': 'Village',
            'village-annotation': 'Village Label',
            'cell': 'Cell',
            'cell-annotation': 'Cell Label',
            'sector': 'Sector',
            'sector-annotation': 'Sector Label',
            'district': 'District',
            'district-annotation': 'District Label',
            'wss': 'WSS',
            'wss-annotation': 'WSS Label',
            'pipeline': 'Pipeline',
            'pipeline_annotation': 'Pipeline Label',
            'watersource': 'Water Source',
            'reservoir': 'Reservoir', 
            'pumping-station': 'Pumping Station', 
            'chamber': 'Chamber', 
            'household': 'Household',
            'publictap': 'Public Tap',
            'waterkiosk': 'Water Kiosk',
            'industrial': 'Industrial',
            'institution': 'Institution',
            'other connection': 'Other connection',
            'handpump': 'Hand Pump',
            'improvedspring': 'Improved Spring',
            'dugwell': 'Dug well',
            'solarpump': 'Solar Pump',
            'otherwaterpoint': 'Other water point',
            'parcels': 'Parcels',
            'parcels_annotation': 'Parcels Label',
            'contour-line': 'Countour',
            'contour-label': 'Contour Label',
            'hillshade': 'Hillshade'
        },
        options: {
            showDefault:false,
            showCheckbox:true,
            reverseOrder:true,
            onlyRendered:true
        }
    },
    elevation: {
        url: 'https://wasac.github.io/rw-terrain/tiles/{z}/{x}/{y}.png',
        options: {
            font: ['Roboto Medium'],
            fontSize: 12,
            fontHalo: 1,
            mainColor: '#263238',
            haloColor: '#fff',
        }
    }
}