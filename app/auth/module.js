import angular from 'angular';

const MODULE_NAME = 'app.auth';

const app = angular.module(MODULE_NAME, [])
  .config(($stateProvider)=>{

  $stateProvider.state('realLogin', {
    url: '/real-login',

    views: {
      root: {
        template: require('./login/login.html'),
        controller: 'LoginCtrl'
      }
    },
    data: {
      title: 'Login',
      rootId: 'extra-page'
    }

  })

  .state('login', {
    url: '/login',
    views: {
      root: {
        template: require('./views/login.html')
      }
    },
    data: {
      title: 'Login',
      htmlId: 'extr-page'
    },
    resolve: {
      srcipts: function(lazyScript){
        return lazyScript.register([
          'jquery-validation'
        ])

      }
    }
  })

  .state('register', {
    url: '/register',
    views: {
      root: {
        template: require('./views/register.html')
      }
    },
    data: {
      title: 'Register',
      htmlId: 'extr-page'
    }
  })

  .state('forgotPassword', {
    url: '/forgot-password',
    views: {
      root: {
        template: require('./views/forgot-password.html')
      }
    },
    data: {
      title: 'Forgot Password',
      htmlId: 'extr-page'
    }
  })

  .state('lock', {
    url: '/lock',
    views: {
      root: {
        template: require('./views/lock.html')
      }
    },
    data: {
      title: 'Locked Screen',
      htmlId: 'lock-page'
    }
  })
});

require('./models/User')(app);

export default MODULE_NAME;

