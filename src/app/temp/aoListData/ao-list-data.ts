import { IaolistData } from "../interface/iaolist-data";

export class AoListData {
    ElementData: IaolistData[] = [
        {
            Id: 1,
            UserId: 'a025005860',
            Name: 'Kin A. Quiambao'
        },
        {
            Id: 2,
            UserId: 'a025007888',
            Name: 'Martin Magpantay Jr.'
        },
        {
            Id: 3,
            UserId: 'a025015373',
            Name: 'Jonas Reuben Navarro'
        }
    ]

    Fields: string[] = ['Id', 'UserId', 'Name'];
}
