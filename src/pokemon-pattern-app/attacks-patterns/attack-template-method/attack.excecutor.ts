
import { typesAttaks } from '../../pokemon/pokemon.model';
import { FireAttack } from './attack-types/fire.attack';
import { GrassAttack } from './attack-types/grass.attack';
import { WaterAttack } from './attack-types/water.attack';
import { AttackTemplate } from './base/attack.template';

export class AttackExecutor {
  static executeAttack(type: string, opponentType: string) {
    let attacker: AttackTemplate;

    switch (type) {
      case typesAttaks.fire:
        attacker = new FireAttack();
        break;
      case typesAttaks.water:
        attacker = new WaterAttack();
        break;
      case typesAttaks.grass:
        attacker = new GrassAttack();
        break;
      default:
        throw new Error('Tipo de ataque no soportado');
    }

    return attacker.attack(opponentType);
  }
}