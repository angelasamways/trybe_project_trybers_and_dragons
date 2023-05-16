import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  // Este valor deve ser decrescido de seus pontos de vida (lifePoints), assim causando um dano (damage);
  // Ao receber o ataque, sua vida nunca poderá chegar a 0, se isto acontecer seus lifePoints devem valer -1;

  receiveDamage(attackPoints: number): number {
    const receivedDamages = this.lifePoints - attackPoints;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}