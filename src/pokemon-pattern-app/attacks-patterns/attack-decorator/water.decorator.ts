import { Attack } from './base-attack.decorator';
import { BattleResult, WaterAttacks, IPokemon, typesAttaks } from '../../pokemon/pokemon.model';

export class WaterAttackDecorator implements Attack {
  constructor(private base: Attack, private attacker: IPokemon) {}

  attack(opponent: IPokemon): BattleResult {
    const result = this.base.attack(opponent);
    const index = Math.floor(Math.random() * WaterAttacks.length);
    return {
      movement: WaterAttacks[index],
      effectiveness: opponent.attackingInfo.weakness === typesAttaks.water,
    };
  }
}
