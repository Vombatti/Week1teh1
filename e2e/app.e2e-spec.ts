import { Week1teh1Page } from './app.po';

describe('week1teh1 App', function() {
  let page: Week1teh1Page;

  beforeEach(() => {
    page = new Week1teh1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
