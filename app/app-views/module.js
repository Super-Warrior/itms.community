import angular from 'angular';
const MODULE_NAME = 'app.auth';

const app = angular.module(MODULE_NAME, [])
.config(function ($stateProvider) {

  $stateProvider
  .state('app.appViews', {
    abstract: true,
    data: {
      title: 'App views'
    }
  })

  .state('app.appViews.projects', {
    url: '/projects',
    data: {
      title: 'Projects'
    },
    views: {
      "content@app": {
        template: require('./views/project-list.html'),
        controller: 'ProjectsDemoCtrl',
        resolve: {
          projects: function($http, APP_CONFIG){
            return $http.get(APP_CONFIG.apiRootUrl + '/project-list.json')
          }
        }
      }
    }, 
    resolve: {
      scripts: function(lazyScript){
        return lazyScript.register([
          'datatables',
          'datatables-bootstrap',
          'datatables-colvis',
          'datatables-tools',
          'datatables-responsive'
        ]);
      }
    }
  })

  .state('app.appViews.blogDemo', {
    url: '/blog',
    data: {
      title: 'Blog'
    },
    views: {
      "content@app": {
        template: require('./views/blog-demo.html')
      }
    }
  })

  .state('app.appViews.galleryDemo', {
    url: '/gallery',
    data: {
      title: 'Gallery'
    },
    views: {
      "content@app": {
        template: require('./views/gallery-demo.html')
      }
    }, 
    resolve: {
      scripts: function(lazyScript){
        return lazyScript.register([
          'superbox'
        ]);
      }
    }
  })

  .state('app.appViews.forumDemo', {
    url: '/forum',
    data: {
      title: 'Forum'
    },
    views: {
      "content@app": {
        template: require('./views/forum-demo.html')
      }
    }
  })

  .state('app.appViews.forumTopicDemo', {
    url: '/forum-topic',
    data: {
      title: 'Forum Topic'
    },
    views: {
      "content@app": {
        template: require('./views/forum-topic-demo.html')
      }
    }
  })

  .state('app.appViews.forumPostDemo', {
    url: '/forum-post',
    data: {
      title: 'Forum Post'
    },
    views: {
      "content@app": {
        template: require('./views/forum-post-demo.html')
      }
    }, 
    resolve: {
      scripts: function(lazyScript){
        return lazyScript.register([
          'summernote'
        ]);
      }
    }
  })
  .state('app.appViews.profileDemo', {
    url: '/profile',
    data: {
      title: 'Profile'
    },
    views: {
      "content@app": {
        template: require('./views/profile-demo.html')
      }
    }
  })
  .state('app.appViews.timelineDemo', {
    url: '/timeline',
    data: {
      title: 'Timeline'
    },
    views: {
      "content@app": {
        template: require('./views/timeline-demo.html')
      }
    }
  })
});

require('./controllers/ProjectsDemoCtrl')(app);

export default MODULE_NAME
