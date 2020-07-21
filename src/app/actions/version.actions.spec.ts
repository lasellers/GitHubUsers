import * as fromVersion from './version.actions';

describe('loadVersions', () => {
  it('should return an action', () => {
    expect(fromVersion.loadVersions().type).toBe('[Version] Load Versions');
  });
});
