export abstract class AttackTemplate {

  attack(opponentType: string): { movement: string; effectiveness: boolean } {
    const move = this.chooseAttack();
    const effectiveness = this.checkEffectiveness(opponentType);
    this.logAttack(move, effectiveness);
    return { movement: move, effectiveness };
  }

  protected abstract chooseAttack(): string;
  protected abstract checkEffectiveness(opponentType: string): boolean;

  protected logAttack(move: string, effective: boolean): void {
    console.log(`Movimiento: ${move}, Efectivo: ${effective}`);
  }
}