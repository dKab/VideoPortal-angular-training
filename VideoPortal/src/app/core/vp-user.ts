import { VpIuser } from './vp-iuser';
export class VpUser implements VpIuser {
    constructor(public Id: number, public FirstName: string, public LastName: string) {}
}
