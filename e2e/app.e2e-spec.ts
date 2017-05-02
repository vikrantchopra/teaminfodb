import { TeaminfodbPage } from './app.po';

describe('teaminfodb App', () => {
  let page: TeaminfodbPage;

  beforeEach(() => {
    page = new TeaminfodbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
