import { openWebpageInBrowser } from './openWebpageInBrowser';

it(`opens a webpage in the default browser`, async () => {
  try {
    await openWebpageInBrowser(`https://news.google.com`);
  } catch (e) {
    expect(e).toMatch('error');
  }

  try {
    openWebpageInBrowser(`https://www.appleinsider.com`);
  } catch (e) {
    expect(e).toMatch('error');
  }
});
