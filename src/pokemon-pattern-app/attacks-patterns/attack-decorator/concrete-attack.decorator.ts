import { Attack } from './base-attack.decorator';
import { BattleResult, IPokemon } from '../../pokemon/pokemon.model';

export class ConcreteAttack implements Attack {
  
  constructor(private attacker: IPokemon) {}

  attack(opponent: IPokemon): BattleResult {
    return {
      movement: `${this.attacker.name} used basic attack!`,
      effectiveness: false,
    };
  }
}
