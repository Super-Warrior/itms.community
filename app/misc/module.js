import angular from 'angular';
const MODULE_NAME = 'app.misc';
export default MODULE_NAME;

const app = angular.module(MODULE_NAME, [])
.config(function ($stateProvider) {

  $stateProvider
  .state('app.misc', {
    abstract: true,
    data: {
      title: 'Miscellaneous'
    }
  })

  .state('app.misc.pricingTable', {
    url: '/pricing-table',
    data: {
      title: 'Pricing Table'
    },
    views: {
      "content@app": {
        template: require('./views/pricing-table.html')
      }
    }
  })

  .state('app.misc.invoice', {
    url: '/invoice',
    data: {
      title: 'Invoice'
    },
    views: {
      "content@app": {
        template: require('./views/invoice.html')
      }
    }
  })

  .state('app.misc.error404', {
    url: '/404',
    data: {
      title: 'Error 404'
    },
    views: {
      "content@app": {
        template: require('./views/error404.html')
      }
    }
  })

  .state('app.misc.error500', {
    url: '/500',
    data: {
      title: 'Error 500'
    },
    views: {
      "content@app": {
        template: require('./views/error500.html')
      }
    }
  })

  .state('app.misc.blank', {
    url: '/blank',
    data: {
      title: 'Blank'
    },
    views: {
      "content@app": {
        template: require('./views/blank.html')
      }
    }
  })

  .state('app.misc.test', {
    url: '/test',
    data: {
      title: 'Test'
    },
    views: {
      "content@app": {
        template: require('./views/test.html')
      }
    }
  })

  .state('app.misc.emailTemplate', {
    url: '/email-template',
    data: {
      title: 'Email Template'
    },
    views: {
      "content@app": {
        template: require('./views/email-template.html')
      }
    }
  })

  .state('app.misc.search', {
    url: '/search',
    data: {
      title: 'Search'
    },
    views: {
      "content@app": {
        template: require('./views/search.html')
      }
    }
  })

  .state('app.misc.ckeditor', {
    url: '/ckeditor',
    data: {
      title: 'CK Editor'
    },
    views: {
      "content@app": {
        template: require('./views/ckeditor.html')
      }
    },
    resolve:{
      scripts: function(lazyScript){
        return lazyScript.register('ckeditor');
      }
    }
  })
});

