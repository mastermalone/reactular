import App from '../../app/angularApp';
import HomePageServiceFactory from './HomePageServiceImpl';

const { HomePageServiceModule } = HomePageServiceFactory();

const HomePageService = App.factory('homePageService', [
  '$rootScope',
  HomePageServiceModule,
]);

export default HomePageService;
