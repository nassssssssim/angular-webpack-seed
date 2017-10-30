import angular from 'angular';
import welcomeDirective from './welcome/welcome.component';

export default angular
  .module('demo', [])
  .component('demoWelcome', welcomeDirective)
  .name;

