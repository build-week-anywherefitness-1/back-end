
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {id: 1, classname: 'Yoga', location: 'Anywhere Fitness', date: '08/05/2020', time: '12:00', classtype: 'Yoga', duration: '1h', intensityLevel: 'Beginner', currentAttendeesNo: 0, maxsize: 30},
        {id: 2, classname: 'Kickboxing', location: 'Anywhere Fitness', date: '08/06/2020', time: '15:00', classtype: 'Kickboxing', duration: '1h', intensityLevel: 'Intermediate', currentAttendeesNo: 0, maxsize: 30},
        {id: 3, classname: 'Zumba', location: 'Anywhere Fitness', date: '08/08/2020', time: '9:00', classtype: 'Zumba', duration: '1h', intensityLevel: 'Beginner', currentAttendeesNo: 0, maxsize: 30},
        {id: 4, classname: 'Pilates', location: 'Anywhere Fitness', date: '08/10/2020', time: '16:00', classtype: 'Pilates', duration: '1h', intensityLevel: 'Advanced', currentAttendeesNo: 0, maxsize: 30},
        {id: 5, classname: 'Spinning', location: 'Anywhere Fitness', date: '08/12/2020', time: '12:00', classtype: 'Spinning', duration: '1h', intensityLevel: 'Beginner', currentAttendeesNo: 0, maxsize: 30},
        {id: 6, classname: 'Barre', location: 'Anywhere Fitness', date: '08/14/2020', time: '15:00', classtype: 'Barre', duration: '1h', intensityLevel: 'Intermediate', currentAttendeesNo: 0, maxsize: 30},
        {id: 7, classname: 'Boot Camp', location: 'Anywhere Fitness', date: '08/12/2020', time: '12:00', classtype: 'Boot Camp', duration: '1h', intensityLevel: 'Beginner', currentAttendeesNo: 0, maxsize: 30},
        {id: 8, classname: 'CrossFit', location: 'Anywhere Fitness', date: '08/16/2020', time: '18:00', classtype: 'CrossFit', duration: '1h', intensityLevel: 'Advanced', currentAttendeesNo: 0, maxsize: 30},
      ]);
    });
};