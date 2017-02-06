import { Angular2examplePage } from './app.po';

describe('angular2example App', function() {
  let page: Angular2examplePage;

  beforeEach(() => {
    page = new Angular2examplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
