import { Injectable } from "@angular/core";
import { GrassAttacks, IPokemon, typesAttaks } from "../../../pokemon/pokemon.model";
import { AttackStrategy } from "../attack-strategy.interface";
import { BattleService } from '../../../service-app/battle.service';

export class GrassConcreteStrategy implements AttackStrategy {
    constructor(private opponent: IPokemon, private battleService: BattleService) {}

    attack(): void {
        const index = Math.floor(Math.random() * GrassAttacks.length);
        const result = {
        movement: GrassAttacks[index],
        effectiveness: this.opponent.attackingInfo.weakness === typesAttaks.grass,
        };
        this.battleService.sendResult(result);
    }
}