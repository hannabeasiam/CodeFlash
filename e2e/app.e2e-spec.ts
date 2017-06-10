import { CodeFlashUIPage } from './app.po';

describe('code-flash-ui App', () => {
  let page: CodeFlashUIPage;

  beforeEach(() => {
    page = new CodeFlashUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
