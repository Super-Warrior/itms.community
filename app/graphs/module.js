import angular from 'angular';

const MODULE_NAME = 'app.graphs';

const app = angular.module(MODULE_NAME, []) 
.config(function ($stateProvider) {
  $stateProvider
  .state('app.graphs', {
    abstract: true,
    data: {
      title: 'Graphs'
    }
  })

  .state('app.graphs.flot', {
    url: '/graphs/flot',
    data: {
      title: 'Flot Charts'
    },
    views: {
      "content@app": {
        controller: 'FlotCtrl',
        template: require('./views/flot-charts.html')
      }
    },
    resolve: {
      scripts: function(lazyScript){
        return lazyScript.register([
          'flot',
          'flot-resize',
          'flot-fillbetween',
          'flot-orderBar',
          'flot-pie',
          'flot-time',
          'flot-tooltip'
        ]);
      }
    }
  })

  .state('app.graphs.morris', {
    url: '/graphs/morris',
    data: {
      title: 'Morris Charts'
    },
    views: {
      "content@app": {
        template: require('./views/morris-charts.html')
      }
    },
    resolve: {
      scripts: function(lazyScript){
        return lazyScript.register([
          'morris'
        ]);
      }
    }
  })

  .state('app.graphs.inline', {
    url: '/graphs/inline',
    data: {
      title: 'Inline Charts'
    },
    views: {
      "content@app": {
        template: require('./views/inline-charts.html')
      }
    },
    resolve: {
      scripts: function(lazyScript){
        return lazyScript.register([
          'sparkline',
          'easy-pie'
        ]);
      }
    }
  })

  .state('app.graphs.dygraphs', {
    url: '/graphs/dygraphs',
    data: {
      title: 'Dygraphs Charts'
    },
    views: {
      "content@app": {
        template: require('./views/dygraphs-charts.html')
      }
    },
    resolve: {
      scripts: function(lazyScript){
        return lazyScript.register([
          'dygraphs'
        ]);
      }
    }
  })
  .state('app.graphs.chartjs', {
    url: '/graphs/chartjs',
    data: {
      title: 'Chartjs'
    },
    views: {
      "content@app": {
        template: require('./views/chartjs-charts.html')
      }
    },
    resolve: {
      scripts: function(lazyScript){
        return lazyScript.register([
          'chartjs'
        ]);
      }
    }
  })
});

require('./controllers/FlotCtrl')(app);

require('./directives/chartjs/chartjsBarChart')(app);
require('./directives/chartjs/chartjsDoughnutChart')(app);
require('./directives/chartjs/chartjsLineChart')(app);
require('./directives/chartjs/chartjsPieChart')(app);
require('./directives/chartjs/chartjsPolarChart')(app);
require('./directives/chartjs/chartjsRadarChart')(app);

require('./directives/inline/easyPieChartContainer')(app);
require('./directives/inline/sparklineContainer')(app);

require('./directives/vectormap/vectorMap')(app);

export default MODULE_NAME;

