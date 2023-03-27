import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private force: EnergyType = 'stamina';
  private static instances = 0;
  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
  }

  get energyType(): EnergyType {
    return this.force;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }
}