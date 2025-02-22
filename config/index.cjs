/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx125c475bda00dc7d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'bf1413fb04f407d70241b95080cbb9e7',

  PROVINCE: '上海市',
  CITY: '上海市-浦东新区',

  USERS: [
    {
      // 想要发送的人的名字
      name: '亲爱的老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oSFB95qJm3Q2Wzca0dI65wRqpmUE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '6y2GJBDS0SbPhWHp_jTz5s7vyWrp6TUjYg9CYIsICno',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-29',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '老婆', year: '1995', date: '08-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2010', date: '07-01',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2021', date: '05-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-01-30' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2021-05-29' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '3NyzTfk_G1l6ylXGUHM0ov6T4AqWi1nkxaVhe8D4T9M',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oSFB95tKKffUjS2JWZqbU5g4Yne0',
    }
  ],

}

module.exports = USER_CONFIG

