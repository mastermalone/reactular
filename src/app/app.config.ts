import App from './angularApp';
import AppRouts, { RouteType } from './app.routes';

const AppConfig = App.config(($stateProvider: any, $urlRouterProvider: any) => {
  $urlRouterProvider.otherwise('/home');

  AppRouts.state.forEach((state: RouteType) => {
    console.log('Yo');
    $stateProvider.state(state.name, {
      url: state.url,
      templateUrl: state.templateUrl,
    });
  });
});

export default AppConfig;
