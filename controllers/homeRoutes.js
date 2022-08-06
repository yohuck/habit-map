const router = require("express").Router();
// const { Model } = require("sequelize/types");
const { Habit, User, Entry } = require("../models");
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

router.get("/users/:id", async (req, res) => {
    try{
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: Habit, 
                include: [{ model: Entry }] }]
          });
   

          const user = userData.get({plain: true})
    

        //   console.log(userData)
          console.log(user)
    
        res.render('user', {
            user: user.habits
            // ...habity
        })
    
    
    } catch(err) {
        res.status(500).json(err)
    }
  });
  


router.get('/stack', async (req, res) => {
try{
    const habitData = await Habit.findAll({
        raw: true
    })

    console.log(habitData)


    // const habity = habitData.get({plain: true})


    res.render('dailyStack', {
        habitData
        // ...habity
    })


} catch(err) {
    res.status(500).json(err)
}

})

module.exports = router;
