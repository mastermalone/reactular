import App from './angularApp';
import AppRoutes from './app.routes';
import AppConfig from './app.config';
import AppInit from './app.init';
import TestModule from '../common/TestModule/testModule';
import HomePageController from '../pages/HomePage/index';

class TestClass {
  constructor() {
    let msg = 'Using ES6';
    console.log(msg);
    console.log(TestModule());
    App;
    AppRoutes;
    AppConfig;
    AppInit;
    HomePageController;
  }
}

let test = new TestClass();
