import * as fromCachingStatus from './caching-status.actions';

describe('loadCachingStatuss', () => {
  it('should return an action', () => {
    expect(fromCachingStatus.loadCachingStatuss().type).toBe('[CachingStatus] Load CachingStatuss');
  });
});
