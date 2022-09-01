// const { build } = require("../models/User");

module.exports = {
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
  // Return only the habits that haven't been completed today
  encourageCards: (input)=> {
    const habitFilter = input => {
      let ayyyy = input.hathReturned.findIndex(elem => elem.message == 'present')
      return !input.hathReturned[ayyyy].found
    }
    const output = input.habits.filter(habit => habitFilter(habit))
    return output
    },
    // takes in entries and finds the first and last date, then creates an array of object representing every day in that range and marks whether or note an entry exists for each date in the range
  dateRange: (input) => {
    console.log('inside the function')
    //helper function that padds each week and adds days in gaps where there are no entries.
    let processRange = (input) => {
      const entries = input.entries
        // creates a new date time object
      const today = new Date;
      console.log(`today is ${today}`)
        // Finds the high/low range.
      let lowest = today
      let highest = today
      entries.forEach(obj => obj.date > highest ? highest = obj.date : '' )
      entries.forEach(obj => obj.date < lowest ? lowest = obj.date : '')
      // Checks the lowest date and adds padding to create a full week
      const lowestTest = lowest.getDay()
      if (lowestTest > 1 ){
        let fuller = lowestTest- 2
        if (lowestTest < 7 || lowestTest == 31){
          lowest = Date.parse(`${lowest.getFullYear()}-${lowest.getMonth() }-${31 - fuller}`)
        }
        else {lowest = Date.parse(`${lowest.getFullYear()}-${lowest.getMonth()+1}-${lowest.getDate() - fuller}`)}
      }
      if (lowestTest == 0 ){
        lowest = Date.parse(`${lowest.getFullYear()}-${lowest.getMonth()+1}-${lowest.getDate() - 6}`)
      }
      const highestTest = new Date(highest).getDay()
      if (highestTest != 0){
        let fullerHigh = 7 - highestTest
        if ((today.getMonth()+1 == 8) && (today.getDate() + fullerHigh) > 31){
          const full = (today.getDate() + fullerHigh) - 31
          highest = Date.parse(`${today.getFullYear()}-${today.getMonth()+2}-${full}`)
        } else{
          highest = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate() +  fullerHigh}`)
        }
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
      entries.map((element) => {
          //grabs the Date
          let isThis = element.date
          // Converts to JS date object for formatting
          let isThisTest = new Date (isThis)
          // Calls the formatting method
          let isThisTestToo = isThisTest.toDateString()
          // Sets the date
          element.date = isThisTestToo
      })
        
      const returnThis = [];
      // Testes whether dates are in the past or the future
      for (let i = 0; i < returner.length; i++){

        let message = ''
        let day = returner[i].date.toString()
        let tested = new Date(day)
        tested = tested.toDateString()
        const testee = today.toDateString()
        if (new Date(day) > today){
          message = 'future'
        } else if (tested == testee) {
          message = 'present'
        } else message = 'past'
        let found = entries.some(element => element.date.toString() == returner[i].date.toString())
        returnThis.push({day, found, message})
      } 

      input.hathReturned = returnThis
      return
      }
      // Finds the longest streak
      const streakTest = habit => {
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
        } 
        
        // Sets the results into the habit object
        habit.topStreak = topStreak
        habit.topStreakDate = topStreakDate
        habit.streakEmoji = ''
        // Tests for on fire
        if (habit.topStreak >= 5){
            habit.streakEmoji = '🔥'
            const start = habit.hathReturned.findIndex(element => element.day == habit.topStreakDate)
            for (let i = 0; i < habit.topStreak; i++ ){
              let minus = i
              habit.hathReturned[start - minus].isTopStreak = true
            }
          }
      }
      // Finds the current streak
      const currentStreak = habit => {
        const pres = habit.hathReturned.findIndex(element => element.message === 'present')
        habit.currentStreak = 0
    
        if(habit.hathReturned[pres].found === true){
          let count = 0
          let x = pres

          const testCon = input => {
            if (habit.hathReturned[x]){
              return habit.hathReturned[x].found
            } else return false
          }

          for (let i = 1; testCon(x); i--){
            count++;
            x -= 1
          } 
          
          habit.currentStreak = count
          if (habit.currentStreak > habit.topStreak){
            habit.topStreak = habit.currentStreak
          }
        } else console.log('wow')
      }

      // Calls the procresRange & streakTest functions on each habit if there is at least one habit and that habit has at least one entry.
      if (input.habits.length > 0 && input.habits[0].entries){
        input.habits.forEach(habit => processRange(habit))
        // console.log('after the first step')
        input.habits.forEach(habit => streakTest(habit))
        // console.log('after the second step')
        // console.log(input.habits)
        input.habits.forEach(habit => currentStreak(habit) )
        // console.log('after the third step')
        return input.habits
      } else return ''
    }
  };









  
