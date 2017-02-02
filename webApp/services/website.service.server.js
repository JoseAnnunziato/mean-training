module.exports = function (app) {
    app.get('/api/website', findAllWebsites);

    var websites = [
        {_id: "123", name: 'facebook', lastOpened: new Date(), owner: 'me'},
        {_id: "234", name: 'twitter', lastOpened: new Date(), owner: 'charlie'},
        {_id: "345", name: 'linkedIn', lastOpened: new Date(), owner: 'dan'}
    ];

    function findAllWebsites(req, res) {
        res.json(websites);
    }

};