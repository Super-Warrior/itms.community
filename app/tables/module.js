import angular from 'angular';
const MODULE_NAME = 'app.tables';

export default MODULE_NAME;

const app = angular.module('app.tables', [])
.config(function ($stateProvider) {
  $stateProvider
  .state('app.tables', {
    abstract: true,
    data: {
      title: 'Tables'
    }
  })

  .state('app.tables.normal', {
    url: '/tables/normal',
    data: {
      title: 'Normal Tables'
    },
    views: {
      "content@app": {
        template: require('./views/normal.html')
      }
    }
  })

  .state('app.tables.datatables', {
    url: '/tables/datatables',
    data: {
      title: 'Data Tables'
    },
    views: {
      "content@app": {
        template: require('./views/datatables.html')
      }
    },
    resolve: {
      srcipts: function(lazyScript){
        return lazyScript.register([
          'datatables',
          'datatables-bootstrap',
          'datatables-colvis',
          'datatables-tools',
          'datatables-responsive'
        ])

      }
    }
  })
  .state('app.tables.jqgrid', {
    url: '/tables/jqgrid',
    data: {
      title: 'Jquery Grid'
    },
    views: {
      "content@app": {
        controller: 'JqGridCtrl',
        template: require("./views/jqgrid.html")
      }
    },
    resolve: {
      srcipts: function(lazyScript){
        return lazyScript.register([
          'jqgrid',
          'jqgrid-locale-en'
        ])
      }
    }
  })
});

require('./controllers/JqGridCtrl')(app);
require('./directives/datatables/datatableBasic')(app);
require('./directives/datatables/datatableColumnFilter')(app);
require('./directives/datatables/datatableColumnReorder')(app);
require('./directives/datatables/datatableTableTools')(app);
require('./directives/jqgrid/jqGrid')(app);

