import { EnergyType } from '../Energy';

abstract class Archetype {
  private _special = 0;
  private _cost = 0;
  constructor(
    private _name: string,
  ) {}

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  abstract get energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}
export default Archetype;
