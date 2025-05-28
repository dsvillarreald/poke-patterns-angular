import { AttackStrategy } from '../attack-strategy.interface';

export class AttackContext {
  constructor(private strategy: AttackStrategy) {}

  execute(): void {
    this.strategy.attack();
  }
}