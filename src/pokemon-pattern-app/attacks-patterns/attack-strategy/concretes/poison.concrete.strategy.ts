import { Injectable } from "@angular/core";
import { PoisonAttack, IPokemon, typesAttaks } from "../../../pokemon/pokemon.model";
import { AttackStrategy } from "../attack-strategy.interface";
import { BattleService } from '../../../service-app/battle.service';

export class PisonConcreteStrategy implements AttackStrategy {
constructor(private opponent: IPokemon, private battleService: BattleService) {}

    attack(): void {
        const index = Math.floor(Math.random() * PoisonAttack.length);
        const result = {
        movement: PoisonAttack[index],
        effectiveness: this.opponent.attackingInfo.weakness === typesAttaks.water,
        };
        this.battleService.sendResult(result);
    }
}