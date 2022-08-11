        // Temp seeds for testing
        const early = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-5}`);
        earlyi = new Date(early)
        const mid = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-3}`);
        midi = new Date(mid)
        const late = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()-1}`);
        latei = new Date(late)
        const future = Date.parse(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()+3}`)
  
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