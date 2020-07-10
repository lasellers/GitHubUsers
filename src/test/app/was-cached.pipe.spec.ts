import { WasCachedPipe } from '../../../src/app/was-cached.pipe';

describe('WasCachedPipe', () => {
  it('should create an instance', () => {
    const pipe = new WasCachedPipe();
    expect(pipe).toBeTruthy();
  });

  it('Was previously Cached', () => {
    const pipe = new WasCachedPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(true)).toEqual('Was previously Cached');
  });

  it('Was NOT previously Cached', () => {
    const pipe = new WasCachedPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(false)).toEqual('Was NOT previously Cached');
  });
});
