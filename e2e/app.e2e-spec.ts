import { CyzaTestPage } from './app.po';

describe('cyza-test App', function() {
  let page: CyzaTestPage;

  beforeEach(() => {
    page = new CyzaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
