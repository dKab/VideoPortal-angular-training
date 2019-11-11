import { VpIcourse } from './vp-icourse';
export class VpCourse implements VpIcourse {
    constructor(public Id: number, public Title: string,
                public CreateDate: Date, public Duration: number,
                public Description: string, public TopRated: boolean) {}
}
