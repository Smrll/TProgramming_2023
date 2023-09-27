import { Pig } from '../src/pig';

describe('Testing pig constructor', () => {
    it('Pig should be created', () => {
      const first = new Pig(500, "DIV69");
    });
    it('Pig with invalid mass', () => {
        expect(() => new Pig(10, "RIP38")).toThrow(Error("Pig's mass should be 50 kg or bigger."));
    });
    it('Pig identificator should be assigned', () => {
        const pig = new Pig(100, "REZ27");
        expect(pig.identificator).toEqual("REZ27");
    });
});

describe('Testing pig methods', () => {
    it('Should give right amount of сало', () => {
        const pig = new Pig(100, "ADB69");
        expect(pig.getSalo()).toEqual(20);
    });
    it('Should be able to return float values', () => {
        const pig = new Pig(101, "ADB69");
        expect(pig.getSalo()).toBeCloseTo(20.2);
    });
    it('Should be able to work with float values', () => {
        const pig = new Pig(100.5, "ADB69");
        expect(pig.getSalo()).toBeCloseTo(20.1);
    });
});