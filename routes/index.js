module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'Express' });
    });

    app.get('/sec',function (req,res) {
        res.render('sec',{title: '秘书'});
    });

    app.get('/sec_data',function (req,res) {
        res.send("hello");
    });

};
