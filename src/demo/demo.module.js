import angular from 'angular';
import welcomeDirective from './welcome/welcome.component';

export default angular
  .module('hasinCourse.demo', [])
  .component('demoWelcome', welcomeDirective)
  .name;

