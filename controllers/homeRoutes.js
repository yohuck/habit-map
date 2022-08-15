const router = require("express").Router();
const withAuth = require('../utils/auth');
// const { Model } = require("sequelize/types");
const { Habit, User, Entry } = require("../models");
const helpers = require("../utils/helpers")

router.get('/', async(req, res) => {
    console.log(req.session.loggedIn)
    res.render('homepage', {
        loggedIn: req.session.loggedIn

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

router.get("/chart", withAuth, async (req, res) => {
    // console.log('here 000')
    try{
        const userData = await User.findByPk(4, {
            attributes: {exclude: ['password']},
            include: [{ model: Habit, 
                include: [{ model: Entry }] }]
          });

        // console.log('checkpoint 1')
          const user = userData.get({plain: true})
          const week = helpers.buildWeek()
          let habits = []
          user.habits ? habits = user.habits : ''
          

        //   console.log('here?')
      
            const test = helpers.dateRange(user)

            console.log(test)

            // console.log(test)
          
          
        //   habits.forEach(habit => {
        //     habit.week = week
        //   })

        //   user.forEach(habit => {
        //     habit.week = week
            
        //   });

        //   console.log(user)


        res.render('chart', {
            fullHabits: test,
            user: user,
            habits: user.habits,
            days: week,
            loggedIn: req.session.loggedIn
        })
    
    } catch(err) {
        res.status(500).json(err)
    }
  });

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
        loggedIn: req.session.loggedIn,

    })
})


router.get('/users', async (req, res) => {
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
          const week = helpers.buildWeek()
          let habits = []
          user.habits ? habits = user.habits : ''
          

   
      
            const test = helpers.dateRange(user)

          


        res.render('user', {
            fullHabits: test,
            user: user,
            habits: user.habits,
            days: week,
            loggedIn: req.session.loggedIn
        })
    
    } catch(err) {
        res.status(500).json(err)
    }
  });

router.get("/users/:id/new", withAuth, async (req, res) => {
    try{
        // const userData = await User.findByPk(req.params.id, {
        //     attributes: {exclude: ['password']},
        //     include: [{ model: Habit, 
        //         include: [{ model: Entry }] }]
        //   });
        //   const user = userData.get({plain: true})
        // res.render('user', {
        //     user: user,
        //     habits: user.habits,
        //     entries: user.habits.entries
        //     // ...habity
        // })
        res.render('new')
    
    } catch(err) {
        res.status(500).json(err)
    }
  });
  


router.get('/users/:id/stack', async (req, res) => {
try{
    const userData = await User.findByPk(req.params.id, {
        attributes: {exclude: ['password']},
        include: [{ model: Habit, 
            include: [{ model: Entry }] }]
      });

    // console.log('checkpoint 1')
      const user = userData.get({plain: true})
      const week = helpers.buildWeek()
      let habits = []
      user.habits ? habits = user.habits : ''
      

    //   console.log('here?')
  
        const test = helpers.dateRange(user)

        const addEncouragement = helpers.encourageCards(user)

        console.log(addEncouragement)


    

    // let habits = habitData.get({plain: true})

    res.render('dailyStack', {
        fullHabits: addEncouragement,
        user: user,
        habits: user.habits,
        days: week,
        loggedIn: req.session.loggedIn
    })
} catch(err) {
    res.status(500).json(err)
}

})

module.exports = router;
