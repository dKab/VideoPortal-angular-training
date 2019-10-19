import { VpIcourse } from './vp-icourse';
export class VpCourse implements VpIcourse {
    Id: number;
    Title: string;
    CreateDate: Date;
    Duration: number;
    Description: string;
    /**
     *
     */
    constructor(id: number, title: string, createDate: Date, duration: number, description: string) {
        this.Id = id;
        this.Title=title;
        this.CreateDate = createDate;
        this.Duration = duration;
        this.Description = description;
    }
}
