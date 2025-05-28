interface IAttacksEffectiveness {
  type: string,
  weakness: string,
};

export enum Patterns {
  STRATEGY = 'strategy',
  DECORATE = 'decorate',
  TEMPLATE = 'template'

};

enum indexTypes {
  Fire = 0,
  Water = 1,
  Grass = 2
};

export interface IPokemon {
  name: string,
  attackingInfo: IAttacksEffectiveness,
};

export enum typesAttaks {
  fire = 'Fire',
  water = 'Water',
  grass = 'Grass'

};

export interface BattleResult {
  movement: string;
  effectiveness: boolean;
};

export const PokemonAttackType: IAttacksEffectiveness[] = [
  {
    type: typesAttaks.fire,
    weakness: typesAttaks.water,
  },
  {
    type: typesAttaks.water,
    weakness: typesAttaks.grass,
  },
  {
    type: typesAttaks.grass,
    weakness: typesAttaks.fire
  }
];

export const pokemons: IPokemon[] = [
  {
    name: 'bulbasaur',
    attackingInfo: PokemonAttackType[indexTypes.Grass],
  },
  {
    name: 'charmander',
    attackingInfo: PokemonAttackType[indexTypes.Fire],
  },
  {
    name: 'squirtle',
    attackingInfo: PokemonAttackType[indexTypes.Water],
  },
];

export const FireAttacks: string[] = [
  'Lanzallamas',
  'Giro Fuego',
  'Colmillo Ígneo',
  'Pirotecnia'
];

export const WaterAttacks: string[] = [
  'Cascada',
  'Buceo',
  'Acua Cola',
  'Acua Jet'
];

export const GrassAttacks: string [] = [
  'Látigo Cepa',
  'Hoja Afilada',
  'Hierba Lazo',
  'Danza Pétalo'
];

export const PoisonAttack: string [] = [
  'Veneno mortal',
  'Bola Lodo',
  'Ray',
];