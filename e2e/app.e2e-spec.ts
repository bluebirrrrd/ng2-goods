import { Ng2GoodsPage } from './app.po';

describe('ng2-goods App', function() {
  let page: Ng2GoodsPage;

  beforeEach(() => {
    page = new Ng2GoodsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
