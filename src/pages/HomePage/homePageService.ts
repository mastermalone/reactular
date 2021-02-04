import App from '../../app/angularApp';
import HomePageServiceFactory from './HomePageServiceImpl';

const { HomePageServiceModule } = HomePageServiceFactory();

/**
 * @since 1.0.0
 * @module HomePageService
 * @description Accepts HomePageServiceModule for the implementation.
 * If desired, you can pass Angular services to this module.  The module is
 * a vanilla JavaScript factory so it can be used in any application
 * if desired.
 */
const HomePageService = App.factory('homePageService', [
  '$rootScope',
  HomePageServiceModule,
]);

export default HomePageService;
