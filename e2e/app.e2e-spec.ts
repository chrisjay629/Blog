import { BloGPage } from './app.po';

describe('blo-g App', function() {
  let page: BloGPage;

  beforeEach(() => {
    page = new BloGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
