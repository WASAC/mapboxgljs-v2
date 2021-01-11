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
    areaSwitcher: {
        areas : [
            {"title":"Select District", "latlng":[30.0291, -2.0032],"zoom":9},
            {"title":"11 Nyarugenge", "latlng":[30.0288653612215,-1.99200475487584],"zoom":12},
            {"title":"12 Gasabo", "latlng":[30.1422120482397,-1.89144733688565],"zoom":12},
            {"title":"13 Kicukiro", "latlng":[30.1437249819475,-2.00886367922947],"zoom":12},
            {"title":"21 Nyanza", "latlng":[29.7934631363515,-2.33586082999584],"zoom":12},
            {"title":"22 Gisagara", "latlng":[29.8436033859615,-2.61811188806316],"zoom":12},
            {"title":"23 Nyaruguru", "latlng":[29.5168759030027,-2.69484387015002],"zoom":12},
            {"title":"24 Huye", "latlng":[29.7087951341718,-2.52464457911903],"zoom":12},
            {"title":"25 Nyamagabe", "latlng":[29.4698787720274,-2.41135618910831],"zoom":12},
            {"title":"26 Ruhango", "latlng":[29.7717605320827,-2.1935977243496],"zoom":12},
            {"title":"27 Muhanga", "latlng":[29.7227253820235,-1.95489071084815],"zoom":12},
            {"title":"28 Kamonyi", "latlng":[29.9024032068034,-2.00944646067485],"zoom":12},
            {"title":"31 Karongi", "latlng":[29.3939794945079,-2.14093530933277],"zoom":12},
            {"title":"32 Rutsiro", "latlng":[29.3245894326215,-1.90887784780581],"zoom":12},
            {"title":"33 Rubavu", "latlng":[29.3303054980033,-1.66515575107771],"zoom":12},
            {"title":"34 Nyabihu", "latlng":[29.510515375496,-1.64739217887844],"zoom":12},
            {"title":"35 Ngororero", "latlng":[29.569465018845,-1.87784485498627],"zoom":12},
            {"title":"36 Rusizi", "latlng":[29.0796739089125,-2.55892167107665],"zoom":12},
            {"title":"37 Nyamasheke", "latlng":[29.1560365354539,-2.35378626195199],"zoom":12},
            {"title":"41 Rulindo", "latlng":[29.9872268548849,-1.73928358664116],"zoom":12},
            {"title":"42 Gakenke", "latlng":[29.7842366394951,-1.69853058335672],"zoom":12},
            {"title":"43 Musanze", "latlng":[29.6065974375442,-1.49853529133511],"zoom":12},
            {"title":"44 Burera", "latlng":[29.8265446554722,-1.46624298025298],"zoom":12},
            {"title":"45 Gicumbi", "latlng":[30.1138711655701,-1.62157664586841],"zoom":12},
            {"title":"51 Rwamagana", "latlng":[30.3547358515713,-1.97549651051349],"zoom":12},
            {"title":"52 Nyagatare", "latlng":[30.37992503494,-1.33824885529472],"zoom":12},
            {"title":"53 Gatsibo", "latlng":[30.4453918762694,-1.61907593334064],"zoom":12},
            {"title":"54 Kayonza", "latlng":[30.6419786108336,-1.84512559523969],"zoom":12},
            {"title":"55 Kirehe", "latlng":[30.7103447378219,-2.23439612617204],"zoom":12},
            {"title":"56 Ngoma", "latlng":[30.4571880272249,-2.18299296025152],"zoom":12},
            {"title":"57 Bugesera", "latlng":[30.1501661937551,-2.2397657167318],"zoom":12},
        ]
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