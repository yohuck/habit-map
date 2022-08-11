// const { build } = require("../models/User");

module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
    get_emoji: () => {
      const randomNum = Math.random();
  
      // Return a random emoji
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="lightbulb">💡</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="laptop">💻</span>`;
      } else {
        return `<span for="img" aria-label="gear">⚙️</span>`;
      }
    },
    buildWeek: () => {
      const today = new Date()
      const dayOfWeek = today.getDay()
      let weekArr = []
      let dayCount = 0
    
      for (let i = 0; i < dayOfWeek ; i++){
        let isToday = false
        let isPast = true
        let day = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (dayOfWeek-1 -i))
        if (i == dayOfWeek -1){
          isToday = true
          isPast = false
        }
        weekArr.push({date: day,
                      day: dayCount,
                      isPast: isPast,
                      isToday: isToday,
                      isFuture: false
                    })
    
        dayCount++
      }
    
    
      let daysLeft = 7 - dayCount
    
      for (let i = 0; i < daysLeft ; i++){
        let day = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i + 1)
        weekArr.push({date: day,
                    day: dayCount,
                    isPast: false,
                    isToday: false,
                    isFuture: true
                  })
        dayCount++
      }
    
      return weekArr
    
    },
    // takes in entries and finds the first and last date, then creates an array of object representing every day in that range and marks whether or note an entry exists for each date in the range
    dateRange: (input) => {


      let processRange = (input) => {

        // const hello = input;
  

        // console.log(hello)
        const entries = input.entries
        // creates a new date time object
        const today = new Date;
  
        // Temp seeds for testing
        const early = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-5}`);
        earlyi = new Date(early)
        const mid = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-3}`);
        midi = new Date(mid)
        const late = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-1}`);
        latei = new Date(late)
        const future = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()+3}`)
  
        // let tempSeed = [
        //   {
        //     id: 231,
        //     date: earlyi,
        //     completed: true,
        //     habit_id: 4,
        //   },
        //   {
        //     id: 236,
        //     date: midi,
        //     completed: true,
        //     habit_id: 4,
        //   },
        //   {
        //     id: 241,
        //     date: latei,
        //     completed: true,
        //     habit_id: 4,
        //   },
        // ];
  
        const seeded = entries
  
      // Finds the high/low range. Adds 3 days to today to give some runway
        let lowest = today
        let highest = future
        // Adds padding to the front if not started on a Monday


        entries.forEach(obj => obj.date > highest ? highest = obj.date : '' )
        entries.forEach(obj => obj.date < lowest ? lowest = obj.date : '')


        const lowestTest = lowest.getDay()
        console.log(lowestTest)
        // console.log('lowest test here' + lowestTest)
        if (lowestTest > 1 ){
          let fuller = lowestTest- 1
          // console.log(fuller)
          lowest = Date.parse(`${lowest.getFullYear()}-${lowest.getMonth()+1}-${lowest.getDate() - fuller}`)
          console.log(new Date(lowest).getDay())
        }
        if (lowestTest == 0 ){
          // console.log('hello')
          lowest = Date.parse(`${lowest.getFullYear()}-${lowest.getMonth()+1}-${lowest.getDate() - 6}`)
        }
        console.log(highest)

        const highestTest = new Date(highest).getDay()

        console.log(highestTest)

        if (highestTest != 0){
          let fullerHigh = 7 - highestTest
          highest = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate() +  fullerHigh}`)
        }


  
        //creates return array
        let returner = []
        // formats lowest then loops through each day adding one day at a time with getDate().
        const first = new Date(lowest)
        let loop = new Date (first)
        while (loop <= highest) {
          let ayo = loop.toDateString()
          // Sets hasEntry to false in object representing each day and pushes to return array.
          returner.push({
            date: ayo,
            hasEntry: false
          })
          let newDate = loop.setDate(loop.getDate() + 1)
          loop = new Date(newDate)
        }
  
        // Formatts each date from the incoming entries
        seeded.map((element) => {
          //grabs the Date
          let isThis = element.date
          // Converts to JS date object for formatting
          let isThisTest = new Date (isThis)
          // Calls the formatting method
          let isThisTestToo = isThisTest.toDateString()
          // Sets the date
          element.date = isThisTestToo
        })
        
        const returnThis = []
        // Loops through each day in the return object and marks the day and whether there's a match
        for (let i = 0; i < returner.length; i++){
          let message = ''
          let day = returner[i].date.toString()
          // console.log(day)
          // console.log(today.toString())
          let tested = new Date(day)
          tested = tested.toDateString()
          // console.log(`We are testing ${tested}`)
          const testee = today.toDateString()
          if (new Date(day) > today){
            message = 'future'
          } else if (tested == testee) {
            message = 'present'
          } else message = 'past'
          let found = seeded.some(element => element.date.toString() == returner[i].date.toString())
          returnThis.push({day, found, message})
        } 
        input.hathReturned = returnThis
        return
      }

      const streakTest = habit => {
        // console.log(habit)
        let topStreakDate = []
        let topStreak = 0
        let streak = 0
        let last = true
        for (let i = 0; i < habit.hathReturned.length; i++){
          if ( habit.hathReturned[i].found == true && last == true){
            streak++
            if (streak > topStreak){
            
              topStreak = streak
              topStreakDate = habit.hathReturned[i].day
            }
          } else {
            streak = 0
  
          }
 
        } habit.topStreak = topStreak
          habit.topStreakDate = topStreakDate
          habit.streakEmoji = ''

          if (habit.topStreak >= 5){
            habit.streakEmoji = '🔥'
            const start = habit.hathReturned.findIndex(element => element.day == habit.topStreakDate)
            // console.log('hello this is me ' + start)
            for (let i = 0; i < habit.topStreak; i++ ){
              // console.log(habit.hathReturned[start - i])
              let minus = i
              habit.hathReturned[start - minus].isTopStreak = true
            }
          }
      }

      const currentStreak = habit => {
        // console.log(habit.hathReturned)
        const pres = habit.hathReturned.findIndex(element => element.message === 'present')
        // habit.hathReturned[pres - 1].found = true
        // habit.hathReturned[pres - 2].found = true
        // console.log(pres)
        if(habit.hathReturned[pres].found === true){
          let count = 0
          let x = pres
          // console.log(x)
          // console.log(habit.hathReturned[x])
          for (let i = 1; habit.hathReturned[x].found === true; i--){
            count++;
            x -= 1
            // console.log(`the count is`)
          } habit.currentStreak = count
          if (habit.currentStreak > habit.topStreak){
            habit.topStreak = habit.currentStreak
          }
        }

        // console.log(habit)
      }






      // Calls the procresRange & streakTest functions on each habit if there is at least one habit and that habit has at least one entry.
      if (input.habits.length > 0 && input.habits[0].entries){
        input.habits.forEach(habit => processRange(habit))
        input.habits.forEach(habit => streakTest(habit))
        input.habits.forEach(habit => currentStreak(habit) )
        return input.habits
      } else return 'hi'
    }
  };









  
