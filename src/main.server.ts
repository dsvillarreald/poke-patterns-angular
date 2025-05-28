import { bootstrapApplication } from '@angular/platform-browser';
import { LayoutComponent } from './pokemon-pattern-app/combat-interface/layout/layout.component';
import { config } from './pokemon-pattern-app/configure-app/app.config.server';

const bootstrap = () => bootstrapApplication(LayoutComponent, config);

export default bootstrap;
