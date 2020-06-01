import { Gists } from './gists.model';

describe('Gists model', () => {
  it('should create an instance', () => {
    expect(new Gists()).toBeTruthy();
  });

  it('should create an instance', () => {
    const obj = new Gists(
      true,
      'Lorem',
      'http://test.com',
      'a.ts',
      '131',
      'Typescript',
      123,
      'http://test.com'
    );
    expect(obj).toBeTruthy();
    expect(obj.id).toEqual('131');
  });

  it('empty model created', () => {
    const obj = new Gists();
    expect(obj.id).toEqual('');
  });
});
