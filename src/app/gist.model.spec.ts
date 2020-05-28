import { Gist } from './gist.model';

describe('Gist', () => {
  it('should create an instance', () => {
    const obj = new Gist(
      'Lorem',
      'a.ts',
      131,
      'http://test.com',
      'Typescript',
      'http://test.com',
      'ff5',
      true,
      true,
    );
    expect(obj).toBeTruthy();
    expect(obj.id).toEqual('ff5');
  });

  it('empty model created', () => {
    const obj = new Gist(
    );
    expect(obj.id).toEqual('');
  });

});
