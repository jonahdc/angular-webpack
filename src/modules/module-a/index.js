import angular from 'angular';
import uirouter from 'angular-ui-router';
import randomNames from '../../services/randomNames.service';

import routing from './module-a.routes';

export default angular.module('app.module-a', [uirouter, randomNames])
.config(routing)
.name;
