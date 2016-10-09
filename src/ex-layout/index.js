var angular = require('angular');

angular
    .module('my-app')
    .component('exLayout', require('./layout.component'))
    .config(require('./layout.route'));