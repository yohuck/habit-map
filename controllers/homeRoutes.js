const router = require("express").Router();
const withAuth = require('../utils/auth');
// const { Model } = require("sequelize/types");
const { Habit, User, Entry } = require("../models");
const helpers = require("../utils/helpers")

router.get('/', async(req, res) => {
    res.render('homepage', {

    })
})

router.get('/logout', async (req, res) => {
    
    if (req.session.loggedIn){
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
        res.status(404).end();
    }

    res.render('homepage', {

    })
})

router.get('/login', async (req, res) => {
    
    if (req.session.loggedIn){
        res.redirect(`/users/${req.session.user_id}`)
        return
    }

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

router.get("/users/:id", withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.params.id, {
            attributes: {exclude: ['password']},
            include: [{ model: Habit, 
                include: [{ model: Entry }] }]
          });
   

          const user = userData.get({plain: true})
    

        //   console.log(userData)
          console.log(user)
    
        res.render('user', {
            user: user,
            habits: user.habits,
            entries: user.habits.entries
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
