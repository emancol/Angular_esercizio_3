export interface Address{
    city: string;
    street: string;
    postalCode: string
}
export enum Role{
    STAFF = 'STAFF',
    MANAGER = 'MANAGER',
    ADMIN = 'ADMIN',
}
export enum Gender{
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER',
}

export interface IUser{
    id: number;
    name: string;
    surname: string;
    age : number;
    dateOfBirth: string;
    address: Address;
    role: Role;
    username: string;
    profilePhotoUrl: string;
    gender: Gender;
}



