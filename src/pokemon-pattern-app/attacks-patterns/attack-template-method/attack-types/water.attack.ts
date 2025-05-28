import { WaterAttacks, typesAttaks } from '../../../pokemon/pokemon.model';
import { AttackTemplate } from '../base/attack.template';

export class WaterAttack extends AttackTemplate {
  protected chooseAttack(): string {
    return WaterAttacks[Math.floor(Math.random() * WaterAttacks.length)];
  }

  protected checkEffectiveness(opponentType: string): boolean {
    return opponentType === typesAttaks.fire;
  }
}