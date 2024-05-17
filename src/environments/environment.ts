// import { KeycloakConfig } from "keycloak-js";

// const keycloakConfig: KeycloakConfig = {
//   url: 'https://authempsit02.testritegroup.com/auth',
//   realm: 'testritegroup-employee',
//   clientId: 'tr-eip-frontend'
// };

export const environment = {
  production: false,
  env:'dev',
  // keycloak: keycloakConfig,
  // silentCheckSsoRedirectUri: window.location.origin + '/tr-eip-web/assets/silent-check-sso.html',
  // keycloakExcludedUrls: [],
  travelAPIUrl: 'http://127.0.0.1:8080'
};
