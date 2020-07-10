import { FilterFollowersPipe } from '../../../src/app/filter-followers.pipe';

describe('FilterFollowersPipe', () => {

  const filters = [
    {id: 1, name: 'lewis'},
    {id: 2, name: 'mike'},
    {id: 3, name: 'john'},
    {id: 4, name: 'toby'},
    {id: 5, name: 'toby lewis'},
  ];

  it('should create an instance', () => {
    const pipe = new FilterFollowersPipe();
    expect(pipe).toBeTruthy();
  });

  it('should handle filtering to one item', () => {
    const pipe = new FilterFollowersPipe();
    expect(pipe).toBeTruthy();

    const result = pipe.transform(filters, 'lewis', 'name');
    expect(result).toEqual([{id: 1, name: 'lewis'}]);
  });

  it('should handle filtering to two items', () => {
    const pipe = new FilterFollowersPipe();
    expect(pipe).toBeTruthy();

    const result = pipe.transform(filters, 'toby', 'name');
    expect(result).toEqual([{id: 4, name: 'toby'}, {id: 5, name: 'toby lewis'}]);
  });

  it('should handle filtering no items', () => {
    const pipe = new FilterFollowersPipe();
    expect(pipe).toBeTruthy();

    const result = pipe.transform(filters, '', 'name');
    expect(result).toEqual(filters);
  });

});
