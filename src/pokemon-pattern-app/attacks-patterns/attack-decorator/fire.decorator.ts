import { Attack } from './base-attack.decorator';
import { BattleResult, FireAttacks, IPokemon, typesAttaks } from '../../pokemon/pokemon.model';

export class FireAttackDecorator implements Attack {
  constructor(private base: Attack, private attacker: IPokemon) {}

  attack(opponent: IPokemon): BattleResult {
    const result = this.base.attack(opponent);
    const index = Math.floor(Math.random() * FireAttacks.length);
    return {
      movement: FireAttacks[index],
      effectiveness: opponent.attackingInfo.weakness === typesAttaks.fire,
    };
  }
}
