import * as fromUsername from './username.actions';

describe('loadUsernames', () => {
  it('should return an action', () => {
    expect(fromUsername.loadUsernames().type).toBe('[Username] Load Usernames');
  });
});
