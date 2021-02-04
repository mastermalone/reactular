export type RouteType = {
  name: string;
  url: string;
  templateUrl: string;
  controller: string;
};

interface AppRoutesInterface {
  state: RouteType[];
}

const AppRoutes: AppRoutesInterface = {
  state: [
    {
      name: 'home',
      templateUrl: '/pages/HomePage/index.html',
      url: '/home',
      controller: 'homePageController as hpCtrl',
    },
  ],
};

export default AppRoutes;
