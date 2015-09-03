import angular from 'angular';
const MODULE_NAME = 'app.ui';

export default MODULE_NAME;

const app = angular.module('app.ui', [])
.config(function($stateProvider){

  $stateProvider
  .state('app.ui', {
    abstract: true,
    data: {
      title: 'UI Elements'
    }
  })
  .state('app.ui.general', {
    url: '/ui/general',
    data: {
      title: 'General Elements'
    },
    views: {
      "content@app": {
        template: require('./views/general-elements.html'),
        controller: 'GeneralElementsCtrl'
      }
    }
  })
  .state('app.ui.buttons', {
    url: '/ui/buttons',
    data: {
      title: 'Buttons'
    },
    views: {
      "content@app": {
        template: require('./views/buttons.html'),
        controller: 'GeneralElementsCtrl'
      }
    }
  })
  .state('app.ui.iconsFa', {
    url: '/ui/icons-font-awesome',
    data: {
      title: 'Font Awesome'
    },
    views: {
      "content@app": {
        template: require('./views/icons-fa.html')
      }
    }
  })
  .state('app.ui.iconsGlyph', {
    url: '/ui/icons-glyph',
    data: {
      title: 'Glyph Icons'
    },
    views: {
      "content@app": {
        template: require('./views/icons-glyph.html')
      }
    }
  })
  .state('app.ui.iconsFlags', {
    url: '/ui/icons-flags',
    data: {
      title: 'Flags'
    },
    views: {
      "content@app": {
        template: require('./views/icons-flags.html')
      }
    }
  })
  .state('app.ui.grid', {
    url: '/ui/grid',
    data: {
      title: 'Grid'
    },
    views: {
      "content@app": {
        template: require('./views/grid.html')
      }
    }
  })
  .state('app.ui.treeView', {
    url: '/ui/tree-view',
    data: {
      title: 'Tree View'
    },
    views: {
      "content@app": {
        template: require('./views/tree-view.html'),
        controller: 'TreeviewCtrl'
      }
    }
  })
  .state('app.ui.nestableLists', {
    url: '/ui/nestable-lists',
    data: {
      title: 'Nestable Lists'
    },
    views: {
      "content@app": {
        template: require('./views/nestable-lists.html')
      }
    },
    resolve: {
      srcipts: function(lazyScript){
        return lazyScript.register([
          'jquery-nestable'
        ])

      }
    }
  })
  .state('app.ui.jqueryUi', {
    url: '/ui/jquery-ui',
    data: {
      title: 'JQuery UI'
    },
    views: {
      "content@app": {
        template: require('./views/jquery-ui.html'),
        controller: 'JquiCtrl'
      }
    },
    resolve: {
      srcipts: function(lazyScript){
        return lazyScript.register([
          'bootstrap-slider'
        ])
      }
    }
  })
  .state('app.ui.typography', {
    url: '/ui/typography',
    data: {
      title: 'JQuery UI'
    },
    views: {
      "content@app": {
        template: require('./views/typography.html')
      }
    }
  })
});

require('./controllers/GeneralElementsCtrl')(app);
require('./controllers/JquiCtrl')(app);
require('./controllers/TreeviewCtrl')(app);

require('./directives/smartClassFilter');
require('./directives/smartHtmlPopover');
require('./directives/smartJquiAccordion');
require('./directives/smartJquiAjaxAutocomplete');
require('./directives/smartJquiDialog');
require('./directives/smartJquiDialogLauncher');
require('./directives/smartJquiDynamicTabs');
require('./directives/smartJquiMenu');
require('./directives/smartJquiTabs');
require('./directives/smartNestable');
require('./directives/smartProgressbar');
require('./directives/smartRideCarousel');
require('./directives/smartSuperBox');
require('./directives/smartTreeview');

