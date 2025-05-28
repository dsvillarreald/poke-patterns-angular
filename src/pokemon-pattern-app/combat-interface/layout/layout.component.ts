import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PatternSelectorComponent } from '../interface-components/pattern-selector/pattern-selector.component';

@Component({
  selector: 'layout-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PatternSelectorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {}
