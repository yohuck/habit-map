const router = require("express").Router();

router.get('/', async(req, res) => {
    res.render('homepage', {

    })
})

router.get('/login', async (req, res) => {
    // if (req.session.logged_in){
    //     res.redirect('/profile')
    //     return
    // }

    res.render('login', {

    })
})


router.get('/register', async (req, res) => {



    res.render('register', {
        
    })
})

router.get('/new', async (req, res) => {



    res.render('new', {

    })
})

module.exports = router;
