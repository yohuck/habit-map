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
    // console.log('here 000')
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

            // console.log(test)
          
          
        //   habits.forEach(habit => {
        //     habit.week = week
        //   })

        //   user.forEach(habit => {
        //     habit.week = week
            
        //   });

        //   console.log(user)


        res.render('user', {
            fullHabits: test,
            user: user,
            habits: user.habits,
            days: week
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
    const habitData = await Habit.findAll({
        where: {
            user_id: req.params.id,
        },

        raw: true
    })

    console.log(habitData)

    // let habits = habitData.get({plain: true})

    res.render('dailyStack', {habitData})
} catch(err) {
    res.status(500).json(err)
}

})

module.exports = router;
