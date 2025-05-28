import { IPokemon, BattleResult } from "../../pokemon/pokemon.model";

export interface Attack {
  attack(opponent: IPokemon): BattleResult;
}
