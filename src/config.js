const version = 0.6;

module.exports = {
    accessToken : process.env.ACCESSTOKEN,
    attribution : '©WASAC,Ltd.',
    center: [30.0291, -2.0032],
    zoom: 9,
    popup: {
        target: [
            'handpump','improvedspring','dugwell','solarpump','otherwaterpoint',
            'household','publictap','waterkiosk','industrial','institution','other connection',
            'chamber','reservoir','pumping-station','watersource','pipeline','wss'
        ]
    }
}