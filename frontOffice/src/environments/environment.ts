// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  stripe: 'pk_test_51N3m8KAHnttekJGiKChoRiuOSMruDUXth4tZ9eV1UFseXPTeJY2YEZe2eX5PvHzKTVanObur9r7PmiNPfWhDOv9b00o5gJbY3O',
  serverUrl: '/api',
  API_BASE_URL: 'http://localhost:5000',
  OAUTH2_REDIRECT_URI: 'http://localhost:4200/auth/oauth2/redirect',
  ACCESS_TOKEN: 'accessToken'
};
