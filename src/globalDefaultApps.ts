import { batchImportApps } from '@gkd-kit/tools';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);

// 全局规则黑名单
// 在一些非系统应用中禁用所有全局规则
export const blackListAppIDs: string[] = [
  // 国内
  'com.tencent.mm', // 微信
  'com.eg.android.AlipayGphone', //支付宝
  'com.tencent.wetype', // 微信输入法
  'com.tmri.app.main', // 交管12123
  'com.alibaba.aliyun', // 阿里云
  'com.alicloud.databox', // 阿里云盘
  'com.xunmeng.pinduoduo', // 拼多多
  'com.deepseek.chat', // DeepSeek

  // 其他
  'li.songe.gkd', // GKD
  'org.fdroid.fdroid', // F-Droid
  'com.rosan.installer.x.revived', // installerX Revived
  'com.azure.authenticator', // Microsoft Authenticator
  'com.android.chrome', // Chrome
  'com.microsoft.emmx', // Edge
  'idm.internet.download.manager', // 1DM
  'idm.internet.download.manager.plus', // 1DM+
  'org.localsend.localsend_app', // LocalSend
  'com.accessibilitymanager', // 无障碍管理器
  'io.legado.app.release', // 阅读

  // 国外
  'com.github.android', // GitHub
  'org.telegram.messenger', // Telegram
  'com.twitter.android', // X(推特)
  'com.valvesoftware.android.steam.community', // Steam
  'com.openai.chatgpt', // ChatGPT
  'com.google.android.youtube', // YouTube

  // ROOT
  'gr.nikolasspyr.integritycheck', // Play Integrity API Checker
  'io.github.vvb2060.keyattestation', // 密钥认证
  'com.zhenxi.hunter', // Hunter
  'com.reveny.nativecheck', // Native Detector
  'com.zhenxi.hunter', // Hunter
  'com.reveny.nativecheck', // Native Detector

  // Xposed 模块
  'me.neko.fckvip', // Fuck for VIP
  'xyz.xfqlittlefan.notdeveloper', // 我不是开发者
  'com.aistra.hail', // 雹
  'com.luckyzyx.luckytool', // LuckyTool 全局规则误触 https://i.gkd.li/i/21339859
  'github.tornaco.android.thanos', // Thanox
  'io.github.lsposed.disableflagsecure', // 启用截图
  'com.flass.layoutinspect', // Layout Inspect
  'io.github.chimio.inxlocker', // InxLocker

  // 玩机
  'com.termux', // Termux
  'bin.mt.plus', // MT管理器
  'rikka.appops', // App Ops
  'moe.shizuku.privileged.api', // Shizuku
  'com.rosan.dhizuku', // Dhizuku
  'com.absinthe.libchecker', // LibChecker

  // 代理
  'com.getsurfboard', // Surfboard
  'moe.nb4a', // NekoBox
  'com.v2ray.ang', // v2rayNG
  'com.v2ray.v2fly', // v2flyNG
  'com.github.metacubex.clash.meta', // Clash Meta for Android

  // https://github.com/gkd-kit/gkd/issues/451
  'mark.via', // via浏览器
  'mark.via.gp', // via浏览器Google Play版
  'com.mmbox.xbrowser', // X浏览器
  'com.mmbox.xbrowser.pro', // X浏览器Google Play版
  'com.mycompany.app.soulbrowser', // soul浏览器

  'com.google.android.contactkeys', // Android System Key Verifier
  'com.google.android.safetycore', // Android System SafetyCore
];

// 在应用中单独禁用某个全局规则
// 开屏广告黑名单
export const openAdBlackListAppIDs = new Set([
  ...blackListAppIDs,
  // 如果应用规则已有开屏广告一类的规则, 则在全局规则禁用此应用
  ...apps
    .filter((app) => app.groups?.some((g) => g.name.startsWith('开屏广告')))
    .map((app) => app.id),
  'com.taptap', // TapTap
  'com.sankuai.meituan', // 美团 误触 https://i.gkd.li/i/17827264
]);

// 更新提示黑名单
export const updateBlackListAppIDs = new Set([
  ...blackListAppIDs,
  // 如果应用规则已有更新提示一类的规则, 则在全局规则禁用此应用
  ...apps
    .filter((app) => app.groups?.some((g) => g.name.startsWith('更新提示')))
    .map((app) => app.id),

  //-----------------------------------------------------

  'com.jingdong.app.mall', // 京东
]);

// 青少年模式黑名单
export const yongBlackListAppIDs = new Set([
  ...blackListAppIDs,
  // 如果应用规则已有青少年模式一类的规则, 则在全局规则禁用此应用
  ...apps
    .filter((app) => app.groups?.some((g) => g.name.startsWith('青少年模式')))
    .map((app) => app.id),
  'com.zhihu.android', // 知乎 全局规则在 https://i.gkd.li/i/14964990 误触
  'com.luna.music', // 汽水音乐 全局规则在 https://i.gkd.li/i/15124801 误触
  'com.baidu.tieba', // 百度贴吧
  'com.android.bankabc', // 中国农业银行
  'com.autonavi.minimap', // 高德地图
  'com.baidu.netdisk', // 百度网盘
  'com.jingdong.app.mall', // 京东
  'com.MobileTicket', // 铁路12306
  'com.sinovatech.unicom.ui', // 中国联通
  'com.sdu.didi.psnger', // 滴滴出行
  'com.sankuai.meituan', // 美团
  'com.taobao.idlefish', // 闲鱼
  'com.tencent.mobileqq', // QQ
  'com.alibaba.android.rimet', // 钉钉
  'com.taptap', // TapTap
  'com.coolapk.market', // 酷安
  'com.xunlei.downloadprovider', // 迅雷
  'com.taobao.taobao', // 淘宝
  'com.xingin.xhs', // 小红书
  'com.ct.client', // 中国电信
  'com.tencent.qqmusic', // QQ音乐
]);

// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）
// 在一些系统软件中启用所有全局规则
export const whiteListAppIDs: string[] = [];

// 在应用中单独启用某个全局规则
// 开屏广告白名单
export const openAdWhiteListAppIDs = new Set([
  ...whiteListAppIDs,
  'com.heytap.browser', // 一加浏览器
  'com.heytap.themestore', // oppo主题商店
]);

// 更新提示白名单
export const updateWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 青少年模式白名单
export const yongWhiteListAppIDs = new Set([...whiteListAppIDs]);
