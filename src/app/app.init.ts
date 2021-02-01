import App from './angularApp';

const AppInit = App.run([
  '$rootScope',
  '$state',
  '$stateParams',
  ($rootScope: any, $state: any, $stateParams: any) => {
    let stateOnLoad = window.location.hash.substring(
      2,
      window.location.hash.length
    );
    $rootScope.state = $state;
    $rootScope.stateParames = $stateParams;
    $rootScope.$on('$stateChangeSuccess', (toState: any) => {
      let currentState = '';
      stateOnLoad = window.location.hash.substring(
        2,
        window.location.hash.length
      );
      $rootScope.toState = toState;
      currentState = $rootScope.toState.name;
      console.log('Where am I?', currentState);
    });
  },
]);

export default AppInit;
