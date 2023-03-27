// A interface deverá possuir os atributos:
// lifePoints, do tipo number;
// strength, do tipo number.
// A interface deverá possuir os métodos:
// attack() que recebe um enemy do tipo SimpleFighter como parâmetro e não possui retorno (void);
// receiveDamage() que recebe um attackPoints do tipo number como parâmetro e retorne um number;

interface SimpleFighter {
  lifePoints: number,
  strength: number,
  attack(enemy: SimpleFighter): void,
  receiveDamage(attackPoints: number): number,
}

export default SimpleFighter;