class SiteController {
    news(req, res){
        res.render('news');  // route news page
    }
    search(req, res){
        res.render('search');
    }
    index(req, res){
        res.render('home');
    }

}

module.exports = new SiteController;
