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
      const early = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-5}`);
      console.log(early)
      const mid = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-3}`);
      console.log(mid)
      const late = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-1}`);
      console.log(late)
      let tempSeed = [
        {
          id: 231,
          date: early,
          completed: true,
          habit_id: 4,
        },
        {
          id: 236,
          date: mid,
          completed: true,
          habit_id: 4,
        },
        {
          id: 241,
          date: late,
          completed: true,
          habit_id: 4,
        },
      ];
      const seeded = entries.concat(tempSeed) 


      let lowest = today
      let highest = today
      seeded.forEach(obj => obj.date > highest ? highest = obj.date : '' )
      seeded.forEach(obj => obj.date < lowest ? lowest = obj.date : '')

      let range = [highest, lowest]
      let returner = []
      
      const first = new Date(lowest)
      let next = new Date(lowest)
      // next.setDate(first.getDay() + 1)
      console.log([first, next, highest])

      for (let i = 0; next < highest; i++){
        next.setDate(first.getDate() + i)
        console.log(next)
        returner[next] = true
      } console.log(returner)
   



      // console.log(range)
    }
  };


// Generates the days of the week






  
