import { WasCachedStringPipe } from '../../app/was-cached-string.pipe';

describe('wasCachedStringPipe', () => {
  it('should create an instance', () => {
    const pipe = new WasCachedStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('Was previously Cached', () => {
    const pipe = new WasCachedStringPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(true)).toEqual('Was previously Cached');
  });

  it('Was NOT previously Cached', () => {
    const pipe = new WasCachedStringPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(false)).toEqual('Was NOT previously Cached');
  });
});
