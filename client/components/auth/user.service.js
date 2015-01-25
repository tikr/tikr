'use strict';

angular.module('tikrApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      search: {
        method: 'POST',
        isArray: true,
        params: {
          id: 'me',
          controller: 'search'
        }
      }
	  });
  });
