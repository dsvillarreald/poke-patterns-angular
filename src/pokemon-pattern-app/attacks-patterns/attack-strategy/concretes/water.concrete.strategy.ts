import { Injectable } from "@angular/core";
import { WaterAttacks, IPokemon, typesAttaks } from "../../../pokemon/pokemon.model";
import { AttackStrategy } from "../attack-strategy.interface";
import { BattleService } from '../../../service-app/battle.service';

export class WaterConcreteStrategy implements AttackStrategy {
constructor(private opponent: IPokemon, private battleService: BattleService) {}

    attack(): void {
        const index = Math.floor(Math.random() * WaterAttacks.length);
        const result = {
        movement: WaterAttacks[index],
        effectiveness: this.opponent.attackingInfo.weakness === typesAttaks.grass,
        };
        this.battleService.sendResult(result);
    }
}