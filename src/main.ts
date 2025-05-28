import { bootstrapApplication } from '@angular/platform-browser';
import { LayoutComponent } from './pokemon-pattern-app/combat-interface/layout/layout.component';
import { appConfig } from './pokemon-pattern-app/configure-app/app.config';

bootstrapApplication(LayoutComponent, appConfig)
  .catch((err) => console.error(err));
