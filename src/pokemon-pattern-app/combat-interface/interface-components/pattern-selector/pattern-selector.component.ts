import { Component, computed, OnInit } from '@angular/core';
import { NgClass, TitleCasePipe } from '@angular/common';
import { Patterns } from '../../../pokemon/pokemon.model';
import { currentPattern, PatternType, setPattern } from '../../../service-app/pattern.signal';

@Component({
  selector: 'app-pattern-selector',
  standalone: true,
  imports: [NgClass, TitleCasePipe],
  templateUrl: './pattern-selector.component.html',
  styleUrl: './pattern-selector.component.scss'
})
export class PatternSelectorComponent implements OnInit {

  menuKeys: string[] = [];
  selected = computed(() => currentPattern());

  ngOnInit() {
    this.menuKeys = Object.keys(Patterns);
  }

  getPattern(key: string): PatternType {
    return Patterns[key as keyof typeof Patterns];
  }

  choose(key: string) {
    setPattern(this.getPattern(key));
  }
}
