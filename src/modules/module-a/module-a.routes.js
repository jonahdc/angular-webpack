import HomeController from './home/home.controller';
import AboutController from './about/about.controller';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider){
  $stateProvider
  .state('home',{
    url: '/',
    template: require('./home/home.html'),
    controller: HomeController,
    controllerAs: 'home'
  })
  .state('about',{
    url: '/about',
    template: require('./about/about.html'),
    controller: AboutController,
    controllerAs: 'about'
  });
}
