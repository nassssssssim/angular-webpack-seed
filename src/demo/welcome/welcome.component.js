import './welcome.component.scss';
import template from './welcome.component.html';

class WelcomeController {
  constructor() {
    this.items = [
      { title: 'Webpack', image: require('./img/what-is-webpack.png') },
      { title: 'Babel', image: require('./img/babel-logo.png') },
      { title: 'Node Sass', image: require('./img/libsass-logo.png') },
    ];
  }
}

export default {
  controller: WelcomeController,
  template: template,
};
