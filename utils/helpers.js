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
    dateRange: (entries) => {
      const today = new Date;

      // Temp seeds for testing
      const early = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-5}`);
      earlyi = new Date(early)
    
      const mid = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-3}`);
      midi = new Date(mid)
      const late = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-1}`);
      latei = new Date(mid)

      let tempSeed = [
        {
          id: 231,
          date: earlyi,
          completed: true,
          habit_id: 4,
        },
        {
          id: 236,
          date: midi,
          completed: true,
          habit_id: 4,
        },
        {
          id: 241,
          date: latei,
          completed: true,
          habit_id: 4,
        },
      ];

      const seeded = entries.concat(tempSeed) 

    // Finds the high/low range
      let lowest = today
      let highest = today
      seeded.forEach(obj => obj.date > highest ? highest = obj.date : '' )
      seeded.forEach(obj => obj.date < lowest ? lowest = obj.date : '')
      let range = [highest, lowest]

      console.log(range)

      let returner = []
      
      const first = new Date(lowest)
      let next = new Date(lowest)
      // next.setDate(first.getDay() + 1)
      // console.log([first, next, highest])



      let loop = new Date (first)
      while (loop <= highest) {
        let ayo = loop.toDateString()
        // console.log(loop)
        returner.push({
          date: ayo,
          hasEntry: false
        })
        let newDate = loop.setDate(loop.getDate() + 1)
        loop = new Date(newDate)
      }

      console.log(returner)

      seeded.map((element) => {
        let isThis = element.date
        let isThisTest = new Date (isThis)
        let isThisTestToo = isThisTest.toDateString()

        console.log(isThisTestToo)
        element.date = isThisTestToo
      })

      console.log(seeded)
  



      for (let i = 0; i < returner.length; i++){
        console.log(returner[i].date.toString())
        let found = seeded.some(element => element.date.toString() == returner[i].date.toString())
        console.log( found )
      }
   



      // console.log(range)
    }
  };


// Generates the days of the week






  
