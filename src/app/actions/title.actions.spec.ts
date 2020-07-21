import * as fromTitle from './title.actions';

describe('loadTitles', () => {
  it('should return an action', () => {
    expect(fromTitle.loadTitles().type).toBe('[Title] Load Titles');
  });
});
