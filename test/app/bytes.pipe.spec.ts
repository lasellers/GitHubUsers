import { BytesPipe } from '../../src/app/bytes.pipe';

describe('BytesPipe', () => {
  it('should create an instance', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
  });

  it('0 bytes formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(0)).toEqual('0 bytes');
  });

  it('1 bytes formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(1)).toEqual('1 bytes');
  });

  it('1 KB formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(1024)).toEqual('1 KB');
  });

  it('1 MB formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(1024 * 1024)).toEqual('1 MB');
  });

  it('1 GB formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(1024 * 1024 * 1024)).toEqual('1 GB');
  });

  it('1 TB formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(1024 * 1024 * 1024 * 1024)).toEqual('1 TB');
  });

  it('1024 TB formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(1024 * 1024 * 1024 * 1024 * 1024)).toEqual('1024 TB');
  });

  it('1.0 KB formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(1024, 1)).toEqual('1.0 KB');
  });

  it('1.0 MB formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(1024 * 1024, 1)).toEqual('1.0 MB');
  });

  it('1.0 GB formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(1024 * 1024 * 1024, 1)).toEqual('1.0 GB');
  });

  it('1.0 TB formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(1024 * 1024 * 1024 * 1024, 1)).toEqual('1.0 TB');
  });

  it('1024.0 TB formats as expected', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(1024 * 1024 * 1024 * 1024 * 1024, 1)).toEqual('1024.0 TB');
  });

});
