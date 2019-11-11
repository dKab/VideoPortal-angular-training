import { VpCourse } from './vp-course';

describe('VpCourse', () => {
  it('should create an instance', () => {
    expect(new VpCourse(0, 'title', new Date(), 100, 'description', false)).toBeTruthy();
  });
});
