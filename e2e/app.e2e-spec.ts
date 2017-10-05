import { MyFuckenAppPage } from './app.po';

describe('my-fucken-app App', () => {
  let page: MyFuckenAppPage;

  beforeEach(() => {
    page = new MyFuckenAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
