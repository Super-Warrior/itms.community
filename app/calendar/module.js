import angular from 'angular';

const MODULE_NAME = 'app.calendar';

const app = angular.module(MODULE_NAME, []) 
.config(function ($stateProvider) {
  $stateProvider
  .state('app.calendar', {
    url: '/calendar',
    views: {
      content: {
        template: require('./views/calendar.tpl.html')
      }
    },
    data:{
      title: 'Calendar'
    }
  });
});

require('./controllers/CalendarCtrl')(app);
require('./models/CalendarEvent')(app);
require('./directives/dragableEvent')(app);
require('./directives/fullCalendar')(app);

export default MODULE_NAME;

