import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private strength: EnergyType = 'stamina';
  private static instances = 0;
  constructor(name: string) {
    super(name);
    Warrior.instances += 1;
  }

  get energyType(): EnergyType {
    return this.strength;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
}