angular.module('MyApp').factory('API', function($http) {
  var baseUrl = 'http://localhost:3000';

  return {

    /**
     * Account routes.
     */
    getProfile: function() {
      return $http.get(baseUrl + '/account');
    },
    updateProfile: function(accountData) {
      return $http.patch(baseUrl + '/account', accountData);
    },
    deleteProfile: function(accountData) {
      return $http.delete(baseUrl + '/account', accountData);
    },
    updatePassword: function(passwordData) {
      return $http.post(baseUrl + '/account/password', passwordData);
    },
    updateEmail: function(emailData) {
      return $http.post(baseUrl + '/account/email', emailData);
    },

    /**
     * Auth routes.
     */
    verifyAccount: function(data) {
      return $http.post(baseUrl + '/auth/verify', data);
    },
    verifyConfirmAccount: function(token) {
      return $http.post(baseUrl + '/auth/verify/' + token);
    },
    resetPassword: function(data) {
      return $http.post(baseUrl + '/auth/reset', data);
    },
    resetConfirmPassword: function(token, data) {
      return $http.post(baseUrl + '/auth/reset/' + token, data);
    },

    /**
     * User routes.
     */
    getMe: function() {
      return $http.get(baseUrl + '/user');
    },
    getUser: function(username) {
      return $http.get(baseUrl + '/users/' + username);
    },

    /**
     * Bookmark routes.
     */
    addBookmark: function(bookmark) {
      return $http({
        method: 'POST',
        url: baseUrl + '/user/bookmarks/',
        data: bookmark,
        params: {
          'extract[]': ['favicon', 'title']
        }
      });
    },
    importGithub: function(file) {
      return $http.post(baseUrl + '/user/bookmarks/import', file);
    },
    deleteBookmark: function(bookmark) {
      return $http({
        method: 'DELETE',
        url: baseUrl + '/user/bookmarks/',
        data: bookmark,
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      });
    },
    updateBookmark: function(bookmark) {
      return $http.patch(baseUrl + '/user/bookmarks/', bookmark);
    }
  };
});