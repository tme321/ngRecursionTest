import { RecursionTestPage } from './app.po';

describe('recursion-test App', function() {
  let page: RecursionTestPage;

  beforeEach(() => {
    page = new RecursionTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
