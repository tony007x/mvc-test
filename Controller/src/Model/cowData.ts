// cowData.ts
import path from 'path';
import fs from 'fs';


interface Cow {
  ID: string;
  Type: string;
  Month: number;
  Year: number;
}

const dataPath = path.join(__dirname, '/data/cowData.json');


const getData = (): Cow[] => {
    if (fs.existsSync(dataPath)) {
        return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    }
    return [];
};

const calculateMilkProduction = (cow: Cow): number => {
    console.log(cow)
    switch (cow.Type) {
        case 'White':
            return 120 - cow.Month; // Plain milk
        case 'Brown':
            return 40 - cow.Year; // Chocolate milk
        case 'Pink':
            return 30 - cow.Month; // Strawberry milk
        default:
            throw new Error('Unknown color');
    }
};

const findCowById = (id: string): Cow | undefined => {
    const cows = getData();
    return cows.find(cow => cow.ID === id);
};

export { getData, Cow, calculateMilkProduction, findCowById};
