export class Pig
{
    private _mass: number;
    public identificator: string; // Код на бирке у свиньи
 
    constructor(mass: number, identificator: string)
    {
        this.mass = mass;
        this.identificator = identificator;
    }
 
    get mass(): number
    {
        return this._mass;
    }
 
    set mass(value: number)
    {
        if (value >= 50)
        {
            this._mass = value;
        }
        else
        {
            throw new Error("Pig's mass should be 50 kg or bigger.");
        }
    }
 
    getSalo(): number
    {
        // Допускается, что количество получаемого со свиньи сала равно 20% от её массы тела
        return this._mass * 0.2;
    }
}