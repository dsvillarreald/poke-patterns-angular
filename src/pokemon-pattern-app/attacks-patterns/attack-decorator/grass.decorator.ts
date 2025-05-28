import { Attack } from './base-attack.decorator';
import { BattleResult, IPokemon, GrassAttacks, typesAttaks } from '../../pokemon/pokemon.model';

export class GrassAttackDecorator implements Attack {
  constructor(private base: Attack, private attacker: IPokemon) {}

  attack(opponent: IPokemon): BattleResult {
    const result = this.base.attack(opponent);
    const index = Math.floor(Math.random() * GrassAttacks.length);
    return {
      movement: GrassAttacks[index],
      effectiveness: opponent.attackingInfo.weakness === typesAttaks.grass,
    };
  }
}
