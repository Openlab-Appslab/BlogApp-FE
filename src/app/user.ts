export class user {
    id: number;
    username: string;
    email: string;
    password: string;
    telephone: string;
    address: string;
    fullname: string;
    admin: string;
  static admin: number;
    
    constructor(
        email: string,
        username: string,
        password: string,
        telephone: string,
        address: string,
        fullname: string,
    ) {}
}