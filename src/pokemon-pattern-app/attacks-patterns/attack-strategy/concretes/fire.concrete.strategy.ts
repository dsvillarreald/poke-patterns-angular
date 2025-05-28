import { FireAttacks, IPokemon, typesAttaks } from '../../../pokemon/pokemon.model';
import { BattleService } from '../../../service-app/battle.service';
import { AttackStrategy } from '../attack-strategy.interface';

export class FireConcreteStrategy implements AttackStrategy {

  constructor(private opponent: IPokemon, private battleService: BattleService) {}

  attack(): void {
    const index = Math.floor(Math.random() * FireAttacks.length);
    const result = {
      movement: FireAttacks[index],
      effectiveness: this.opponent.attackingInfo.weakness === typesAttaks.fire,
    };
    this.battleService.sendResult(result);
  }
}