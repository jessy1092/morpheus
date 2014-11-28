'use strict';

module.exports = {
  home: {
    path: '/',
    method: 'get',
    page: 'home'
  },
  single: {
    path: '/:slug',
    method: 'get',
    page: 'single'
  }
};