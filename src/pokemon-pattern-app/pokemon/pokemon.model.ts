interface IAttacksEffectiveness {
  type: string,
  weakness: string,
};

enum indexTypes {
  Fire = 0,
  Water = 1,
  Grass = 2,
  //TODO: use to challenge
  // Electric = 3
};

export interface IPokemon {
  name: string,
  attackingInfo: IAttacksEffectiveness,
};

export enum typesAttaks {
  fire = 'Fire',
  water = 'Water',
  grass = 'Grass',
  //TODO: use to challenge
  // electric = 'Electric'
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
  },
  //TODO: use to challenge
  // {
  //   type: typesAttaks.electric,
  //   weakness: typesAttaks.electric
  // },
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
  //TODO: use to challenge
  // {
  //   name: 'pikachu',
  //   attackingInfo: PokemonAttackType[indexTypes.Electric],
  // },
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

//TODO: use to challenge
// export const ElectricAttack: string [] = [
//   'Impactrueno',
//   'Bola voltio',
//   'Chispazo',
//   'Trueno'
// ];