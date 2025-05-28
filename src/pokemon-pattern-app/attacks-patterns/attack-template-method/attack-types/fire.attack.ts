import { FireAttacks, typesAttaks } from '../../../pokemon/pokemon.model';
import { AttackTemplate } from '../base/attack.template';

export class FireAttack extends AttackTemplate {
  protected chooseAttack(): string {
    return FireAttacks[Math.floor(Math.random() * FireAttacks.length)];
  }

  protected checkEffectiveness(opponentType: string): boolean {
    return opponentType === typesAttaks.grass;
  }
}
