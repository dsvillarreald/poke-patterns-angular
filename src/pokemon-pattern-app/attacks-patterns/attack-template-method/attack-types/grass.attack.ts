import { GrassAttacks, typesAttaks } from '../../../pokemon/pokemon.model';
import { AttackTemplate } from '../base/attack.template';

export class GrassAttack extends AttackTemplate {
  protected chooseAttack(): string {
    return GrassAttacks[Math.floor(Math.random() * GrassAttacks.length)];
  }

  protected checkEffectiveness(opponentType: string): boolean {
    return opponentType === typesAttaks.water;
  }
}