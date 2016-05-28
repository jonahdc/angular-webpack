import angular from 'angular';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import '../style/app.css';

import routing from './app.config';
import moduleA from '../modules/module-a';

import uirouter from 'angular-ui-router';

let app = () => {
  return {
    template: require('./app.html'),
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, moduleA])
  .directive('app', app)
  .config(routing);

export default MODULE_NAME;
