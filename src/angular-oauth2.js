/**
 * Module dependencies.
 */

import angular from 'angular';
import OAuthProvider from './providers/oauth-provider';
import OAuthTokenProvider from './providers/oauth-token-provider';
import oauthConfig from './config/oauth-config';
import oauthInterceptor from './interceptors/oauth-interceptor';
// import ngCookies from 'angular-cookies';

angular.module('angular-oauth2', [
    'ngCookies'
  ])
  .config(oauthConfig)
  .factory('oauthInterceptor', oauthInterceptor)
  .provider('OAuth', OAuthProvider)
  .provider('OAuthToken', OAuthTokenProvider)
;