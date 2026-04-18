import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mihoyo.hyperion',
  name: '米游社',
  groups: [
    {
      key: 0,
      name: '青少年模式',
      desc: '点击[我知道了]',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matchTime: 6000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.mihoyo.hyperion.main.HyperionMainActivity',
          matches:
            '@TextView[id="com.mihoyo.hyperion:id/tv_dialog_i_know"][text="我知道了"] - TextView[id="com.mihoyo.hyperion:id/tv_dialog_go_to_teenage_mode"] -2 TextView[text="未成年人模式"]',
          snapshotUrls: [
            'https://i.gkd.li/i/26832279', // text=我知道了
          ],
        },
      ],
    },
  ],
});
