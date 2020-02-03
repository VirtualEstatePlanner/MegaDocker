import { openWebpageInBrowser } from './openWebpageInBrowser';

it(`opens a webpage in the default browser`, async () => {
  try {
    // console.log(`opening google`);
    await openWebpageInBrowser(`https://news.google.com`);
  } catch (e) {
    expect(e).toMatch('error');
  }

  // console.log(`opening appleinsider`);
  try {
    openWebpageInBrowser(`https://www.appleinsider.com`);
  } catch (e) {
    expect(e).toMatch('error');
  }
});
