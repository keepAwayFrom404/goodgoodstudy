// 用户代理字符串检测脚本
const client = function () {

  const engine = { // 呈现引擎检测脚本
    ie: 0,
    gecko: 0,
    webkit: 0,
    khtml: 0,
    opera: 0,

    // 完整的版本号
    ver: null
  }

  const browser = { // 浏览器
    ie: 0,
    firefox: 0,
    safari: 0,
    konq: 0,
    opera: 0,
    chrome: 0,
    // 具体的版本
    ver: null
  }

  const system = { // 检测平台
    win: false,
    mac: false,
    x11: false,

    // 移动设备
    iphone: false,
    ipad: false,
    ipod: false,
    ios: false,
    android: false,
    nokiaN: false,
    winMobile: false,

    // 游戏系统
    wii: false,
    ps: false
  }

  const ua = navigator.userAgent

  if (window.opera) { // opera
    engine.ver = browser.ver = window.opera.version()
    engine.opera = browser.opera = parseFloat(engine.ver)
  } else if (/AppleWebkit\/(\S+)/.test(ua)) { // webkit
    engine.ver = RegExp['$1']
    engine.webkit = parseFloat(engine.ver)

    // 确定chrome还是safari
    if (/Chrome\/(\S+)/.test(ua)) {
      browser.ver = RegExp['$1']
      browser.chrome = parseFloat(browser.ver)
    } else if (/Version\/(\S+)/.test(ua)) {
      browser.ver = RegExp['$1']
      browser.safari = parseFloat(browser.ver)
    } else {
      // 近似确定版本号
      const safariVersion = 1
      if (engine.webkit < 100) {
        safariVersion = 1
      } else if (engine.webkit < 312) {
        safariVersion = 1.2
      } else if (engine.webkit < 412) {
        safariVersion = 1.3
      } else {
        safariVersion = 2
      }

      browser.safari = browser.ver = safariVersion
    }
  } else if (/KHTML\/(+S)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) { // KHTML
    engine.ver = browser.ver = RegExp['$1']
    engine.khtml = browser.konq = parseFloat(engine.ver)
  } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) { // Gecko
    engine.ver = RegExp['$1']
    engine.gecko = parseFloat(engine.ver)

    // 确定是不是Firefox
    if (/Firefox\/(\S+)/.test(ua)) {
      browser.ver = RegExp['$1']
      browser.firefox = parseFloat(browser.ver)
    }
  } else if (/MSIE ([^;]+)/.test(ua)) {
    engine.ver = browser.ver = RegExp['$1']
    engine.ie = browser.ie = parseFloat(engine.ver)
  } else {
    alert('no match')
  }

  // 检测浏览器
  browser.ie = engine.ie
  browser.opera = engine.opera

  const p = navigator.platform
  system.win = p.indexOf('Win') === 0
  system.mac = p.indexOf('Max') === 0
  system.x11 = p.indexOf('X11') === 0 || p.indexOf('Linux') === 0

  // 检测windows操作系统
  if (system.win) {
    if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
      if (RegExp['$1'] === 'NT') {
        switch (RegExp['$2']) {
          case '5.0':
            system.win = '2000'
            break
          case '5.1':
            system.win = 'XP'
            break
          case '6.0':
            system.win = 'Vista'
            break
          case '6.1':
            system.win = '7'
            break
          default:
            system.win = 'NT'
            break
        }
      } else if (RegExp['$1'] === '9x') {
        system.win = 'ME'
      } else {
        system.win = RegExp['$1']
      }
    }
  }

  system.iphone = ua.indexOf('iphone') > -1
  system.ipad = ua.indexOf('ipad') > -1
  system.ipod = ua.indexOf('ipod') > -1
  system.nokiaN = ua.indexOf('NokiaN') > -1

  // windows mobile
  if (system.winMobile) {
    system.winMobile = system.win
  } else if (/Windows Phone OS (\d+.\d+)/.test(ua)) {
    system.win = 'Phone'
    system.winMobile = parseFloat(RegExp['$1'])
  }

  // 检测ios版本
  if (system.mac && ua.indexOf('Mobile') > -1) {
    if (/CPU(?:iphone)?OS(\d+_\d+)/.test(ua)) {
      system.ios = parseFloat(RegExp['$1'].replace('_', '.'))
    } else {
      system.ios = 2
    }
  }

  // 检测android版本
  if (/Android(\d+\.\d+)/.test(ua)) {
    system.android = parseFloat(RegExp['$1'])
  }

  system.wii = ua.indexOf('Wii') > -1
  system.ps = /playstation/i.test(ua)

  return {
    engine,
    browser,
    system
  }
}()

if (client.engine.webkit) { // 判断是否webkit内核
  if (client.browser.chrome) {
    // 执行chrome代码
  } else if (client.browser.safari) {
    // 执行safari代码
  }
} else if (client.engine.gecko) {
  if (client.browser.firefox) {
    // 执行针对Firefox代码
  } else {
    // 执行其他gecko浏览器代码
  }
}