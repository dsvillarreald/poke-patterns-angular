import { IPokemon, typesAttaks } from "../../../pokemon/pokemon.model";
import { Attack } from "../base-attack.decorator";
import { ConcreteAttack } from "../concrete-attack.decorator";
import { FireAttackDecorator } from "../fire.decorator";
import { GrassAttackDecorator } from "../grass.decorator";
import { WaterAttackDecorator } from "../water.decorator";


export class AttackFactory {
  static create(attacker: IPokemon): Attack {
    const base = new ConcreteAttack(attacker);
    switch (attacker.attackingInfo.type) {
      case typesAttaks.fire:
        return new FireAttackDecorator(base, attacker);
      case typesAttaks.water:
        return new WaterAttackDecorator(base, attacker);
      case typesAttaks.grass:
        return new GrassAttackDecorator(base, attacker);
      default:
        return base;
    }
  }
}
