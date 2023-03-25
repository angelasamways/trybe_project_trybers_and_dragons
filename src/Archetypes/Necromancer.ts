import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private magic: EnergyType = 'mana';
  private static instances = 0;
  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
  }

  get energyType(): EnergyType {
    return this.magic;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }
}