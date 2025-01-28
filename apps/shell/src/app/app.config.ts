import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

import {
  LazyElementModuleOptions,
  LazyElementsModule,
} from '@angular-extensions/elements';

const lazyElementsOptions: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'nds-mfe-1',
      url: 'assets/js/mfe-1/main.js',
      isModule: true,
    },
  ],
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    importProvidersFrom(LazyElementsModule.forRoot(lazyElementsOptions)),
  ],
};
