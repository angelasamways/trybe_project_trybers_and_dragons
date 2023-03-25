import Energy from '../Energy';

interface Fighter {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy,
  attack(enemy: Fighter): void,
  special?(enemy: Fighter): void,
  levelUp(): void,
  receiveDamage(attackPoints: number): number,
}

// https://www.logicbig.com/tutorials/misc/typescript/interface-to-describe-object-with-optional-properties.html

export default Fighter;
