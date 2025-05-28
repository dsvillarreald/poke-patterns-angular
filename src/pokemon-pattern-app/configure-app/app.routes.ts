import { Routes } from "@angular/router";
import { BattleDemoComponent } from "../combat-interface/battle-demo/battle-demo.component";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    component: BattleDemoComponent
  }
];
