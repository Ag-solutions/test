import { AngularCli1Page } from './app.po';

describe('angular-cli1 App', () => {
  let page: AngularCli1Page;

  beforeEach(() => {
    page = new AngularCli1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
