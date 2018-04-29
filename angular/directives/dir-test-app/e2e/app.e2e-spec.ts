import { DirTestAppPage } from './app.po';

describe('dir-test-app App', () => {
  let page: DirTestAppPage;

  beforeEach(() => {
    page = new DirTestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
