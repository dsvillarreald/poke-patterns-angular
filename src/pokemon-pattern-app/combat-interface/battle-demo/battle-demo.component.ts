import { NgClass, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { FireConcreteStrategy } from '../../attacks-patterns/attack-strategy/concretes/fire.concrete.strategy';
import { GrassConcreteStrategy } from '../../attacks-patterns/attack-strategy/concretes/grass.concrete.strategy';
import { WaterConcreteStrategy } from '../../attacks-patterns/attack-strategy/concretes/water.concrete.strategy';
import { AttackContext } from '../../attacks-patterns/attack-strategy/context/attack.context';
import { IPokemon, BattleResult, pokemons, typesAttaks } from '../../pokemon/pokemon.model';
import { BattleService } from '../../service-app/battle.service';

@Component({
  selector: 'app-battle-demo',
   standalone: true,
  imports: [RouterOutlet, NgClass, TitleCasePipe],
  templateUrl: './battle-demo.component.html',
  styleUrl: './battle-demo.component.scss'
})
export class BattleDemoComponent {
 title = 'poke-patterns-angular';
  attacker: IPokemon | undefined;
  counter: IPokemon | undefined;
  loadingAttacker = false;
  loadingCounter = false;
  result: BattleResult | null = null;
  attacking: boolean = false;
  pattern: string = 'strategy';

  private sub = new Subscription();

  constructor(
    private battleService: BattleService
  ) {}

  ngOnInit(): void {
    console.log('init');
    this.sub = this.battleService.result$.subscribe(result => {
      this.result = result;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  selectAttacker(name: string): void {
    console.log('name');
    this.attacker = undefined;
    this.counter = undefined;

    setTimeout(() => {
      this.loadingAttacker = true;
      this.attacker = pokemons.find(p => p.name === name);
      setTimeout(() => {
        this.loadingAttacker = false;
        this.selectCounter();
      }, 600);
    }, 300);
  }

  selectCounter(): void {
    this.loadingCounter = true;
    setTimeout(() => {
      this.loadingCounter = false;
      const index = Math.floor(Math.random() * pokemons.length);
      this.counter = pokemons[index];
    }, 600);
  }

  attack(): void {
    this.attacking = true;
    return this.attackPatternStrategy();
  }

  attackPatternStrategy (): void {
    if (!this.attacker || !this.counter) return;
    const context = this.buildAttackContext(this.attacker, this.counter);
    context.execute();
  }

  private buildAttackContext(attacker: IPokemon, opponent: IPokemon): AttackContext {
    debugger
    switch (attacker.attackingInfo.type) {
      case typesAttaks.fire:
        return new AttackContext(new FireConcreteStrategy(opponent, this.battleService));
      case typesAttaks.water:
        return new AttackContext(new WaterConcreteStrategy(opponent, this.battleService));
      case typesAttaks.grass:
        return new AttackContext(new GrassConcreteStrategy(opponent, this.battleService));
      default:
        throw new Error('Tipo de Pokémon no soportado');
    }
  }

  get attackerName(): string {
    return this.attacker?.name ?? '';
  }

  get counterName(): string {
    return this.counter?.name ?? '';
  }

  get attakerAlert(): string {
    if (!this.attackerName) return 'Selecciona un Pokemón...';
    if (!this.attacking) return `${this.attackerName.toLocaleUpperCase()}, ¡Yo te elijo!`;
    return `${this.attackerName.toLocaleUpperCase()}, Usará un ataque basado en el Strategy pattern`;
  }

  get counterAlert(): string {
    if (this.counterName) {
      return `El equipo Rocket ha seleccionado a ${this.counterName.toLocaleUpperCase()}... ¿qué acción deseas hacer?`;
    }
    return '';
  }

  get resultAttak(): { attakAction: string, attackEffective: string } | undefined {
    if (!this.result) return undefined;
    return {
      attakAction: `${this.attackerName} ha usado ${this.result.movement} !!`,
      attackEffective: this.result.effectiveness
        ? 'El Ataque fue Super Efectivo!!!'
        : 'El Ataque fue Poco Efectivo'
    };
  }
}
