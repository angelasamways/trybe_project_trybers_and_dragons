import Race from './Race';

export default class Elf extends Race {
  private points = 99;
  private static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  get maxLifePoints(): number {
    return this.points;
  }

  static createdRacesInstances(): number {
    return this.instances;
  }
}