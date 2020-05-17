import {Gist} from './gist';

describe('Gist', () => {
  it('should create an instance', () => {
    const obj = new Gist(
      'Lorem',
      'a',
      131,
      'http://test.com',
      'Typescript',
      true,
      true,
      'ff5',
      'http://test.com'
    );
    expect(obj).toBeTruthy();
  });
});
