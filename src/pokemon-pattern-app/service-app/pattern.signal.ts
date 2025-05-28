import { signal } from '@angular/core';
import { Patterns } from '../pokemon/pokemon.model';

export type PatternType = Patterns.STRATEGY | Patterns.TEMPLATE | Patterns.DECORATE;

export const currentPattern = signal<PatternType>(Patterns.STRATEGY);

export const setPattern = (pattern: PatternType) => {
  currentPattern.set(pattern);
};
