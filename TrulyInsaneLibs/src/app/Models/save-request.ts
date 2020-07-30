import { Lib } from './lib';
import { Person } from './person';

export class SaveRequest
{
    received: Lib;
    person: Person;
    savedName: string;
}
