import angular from 'angular';

const MODULE_NAME = 'app.inbox';

const app = angular.module('app.inbox', [])
.config(function ($stateProvider) {

  $stateProvider
  .state('app.inbox', {
    url: '/inbox',
    data: {
      title: 'Inbox'
    },
    views: {
      content: {
        template: require('./views/inbox-layout.html'),
        controller: function ($scope, config) {
          $scope.config = config.data;
          $scope.deleteSelected = function(){
            $scope.$broadcast('$inboxDeleteMessages')
          }
        },
        controllerAs: 'inboxCtrl',
        resolve: {
          config: function (InboxConfig) {
            return InboxConfig;
          }
        }
      }
    }

  })
  .state('app.inbox.folder', {
    url: '/:folder',
    views: {
      inbox: {
        template: require('./views/inbox-folder.html'),
        controller: function ($scope, messages, $stateParams) {
          $scope.$parent.selectedFolder = _.find($scope.$parent.config.folders, {key: $stateParams.folder});
          $scope.messages = messages;

          $scope.$on('$inboxDeleteMessages', function(event){
            angular.forEach($scope.messages, function(message, idx){
              if(message.selected){
                message.$delete(function(){
                  $scope.messages.splice(idx, 1);
                })
              }
            });
          });

        },
        resolve: {
          messages: function (InboxMessage, $stateParams) {
            return InboxMessage.query({folder: $stateParams.folder});
          }
        }
      }
    }
  })
  .state('app.inbox.folder.detail', {
    url: '/detail/:message',
    views: {
      "inbox@app.inbox": {
        templateUrl: require('./views/inbox-detail.html'),
        controller: function ($scope, message) {
          $scope.message = message;
        },
        resolve: {
          message: function (InboxMessage, $stateParams) {
            return InboxMessage.get({id: $stateParams.message})
          }
        }
      }
    }
  })
  .state('app.inbox.folder.replay', {
    url: '/replay/:message',
    views: {
      "inbox@app.inbox": {
        templateUrl: require('./views/inbox-replay.html'),
        controller: function ($scope, $timeout, $state, replayTo) {
          $scope.replayTo = replayTo;
          $scope.sending = false;
          $scope.send = function(){
            $scope.sending = true;
            $timeout(function(){
              $state.go('app.inbox.folder')
            }, 1000);
          }
        },
        controllerAs: 'replayCtrl',
        resolve: {
          replayTo: function (InboxMessage, $stateParams) {
            return InboxMessage.get({id: $stateParams.message})
          }
        }
      }
    }
  })
  .state('app.inbox.folder.compose', {
    url: '/compose',
    views: {
      "inbox@app.inbox": {
        templateUrl: require('./views/inbox-compose.html'),
        controller: function ($scope, $timeout, $state) {
          $scope.sending = false;
          $scope.send = function(){
            $scope.sending = true;
            $timeout(function(){
              $state.go('app.inbox.folder')
            }, 1000);
          }
        },
        controllerAs: 'composeCtrl'
      }
    }
  });
});

require('./directives/messageLabels')(app);
require('./directives/unreadMessagesCount')(app);
require('./models/InboxConfig')(app);
require('./models/InboxMessage')(app);

export default MODULE_NAME;
