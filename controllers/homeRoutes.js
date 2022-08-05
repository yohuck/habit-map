const router = require("express").Router();
const helpers = require("../utils/helpers")

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


router.get('/users', async (req, res) => {
    console.log(helpers.buildWeek())
    const test = helpers.buildWeek()
    res.render('users', {
        days: test
    })
})



module.exports = router;
