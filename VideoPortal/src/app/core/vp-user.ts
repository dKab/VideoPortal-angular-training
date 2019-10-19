import { VpIuser } from './vp-iuser';
export class VpUser implements VpIuser {
    Id: number;
    FirstName: string;
    LastName: string;
    /**
     *
     */
    constructor(id: number, firstName: string, lastName: string) {
        this.Id= id;
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}
