import { VpUser } from './vp-user';

describe('VpUser', () => {
  it('should create an instance', () => {
    expect(new VpUser(0, 'firstname', 'lastname')).toBeTruthy();
  });
});
