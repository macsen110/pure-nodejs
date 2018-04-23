const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('http://www.baidu.com');
  dumpFrameTree(page.mainFrame(), '');
  await browser.close();

  function dumpFrameTree(frame, indent) {
    console.log(indent + frame.url());
    console.log(frame.url())
    for (let child of frame.childFrames())
      dumpFrameTree(child, indent + '  ');
  }
});
// (async () => {
//   const browser = await (puppeteer.launch({
//     // 若是手动下载的chromium需要指定chromium地址, 默认引用地址为 /项目目录/node_modules/puppeteer/.local-chromium/
//     //executablePath: '/Users/macsen/Desktop/mac-515411/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
//     //设置超时时间
//     timeout: 15000,
//     //如果是访问https页面 此属性会忽略https错误
//     ignoreHTTPSErrors: true,
//     // 打开开发者工具, 当此值为true时, headless总为false
//     devtools: false,
//     // 关闭headless模式, 会打开浏览器
//     headless: true
//   }));
//   //console.log(browser)
//   //console.log(browser.userAgent().then(res => console.log(res)))
//   const page = await browser.newPage();
//   //await page.emulate(iPhone);
//   await page.goto('http://m.yaoex.com/web/h5/yqg_active/index.html');
//   // await page.screenshot({
//   //   path: 'aa1src.png',
//   //   type: 'png',
//   //   // quality: 100, 只对jpg有效
//   //   fullPage: true,
//   //   // 指定区域截图，clip和fullPage两者只能设置一个
//   //   // clip: {
//   //   //   x: 0,
//   //   //   y: 0,
//   //   //   width: 1000,
//   //   //   height: 40
//   //   // }
//   // });
//   dumpFrameTree(page.mainFrame(), '');
//   function dumpFrameTree(frame, indent) {
//     console.log(indent + frame.url());
//     for (let child of frame.childFrames())
//       dumpFrameTree(child, indent + '  ');
//   }
//   browser.close();
// })();