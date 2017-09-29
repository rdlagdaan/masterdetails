import { MasterdetailsPage } from './app.po';

describe('masterdetails App', () => {
  let page: MasterdetailsPage;

  beforeEach(() => {
    page = new MasterdetailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
