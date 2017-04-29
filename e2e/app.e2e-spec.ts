import { HowDoYouLearn2Page } from './app.po';

describe('how-do-you-learn2 App', () => {
  let page: HowDoYouLearn2Page;

  beforeEach(() => {
    page = new HowDoYouLearn2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
