import { MyDemoAppPage } from './app.po';

describe('my-demo-app App', () => {
  let page: MyDemoAppPage;

  beforeEach(() => {
    page = new MyDemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
