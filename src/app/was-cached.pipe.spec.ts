import { WasCachedPipe } from './was-cached.pipe';

describe('WasCachedPipe', () => {
  it('create an instance', () => {
    const pipe = new WasCachedPipe();
    expect(pipe).toBeTruthy();
  });
});
