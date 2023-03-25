import Race from './Race';

export default class Halfling extends Race {
  private points = 60;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  get maxLifePoints(): number {
    return this.points;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}