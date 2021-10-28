const Mock = require('mockjs')

function handler(req, res) {
  // 模拟延时
  // Mock.setup({
  //   timeout: 500
  // })

  const data = Mock.mock({
    "userInfo|4": [{ //生成|num个如下格式名字的数据
      "id|+1": 1, //数字从当前数开始后续依次加一
      "name": "@cname", //名字为随机中文名字
      "ago|18-28": 25, //年龄为18-28之间的随机数字
      "sex|1": ["男", "女"], //性别是数组中的一个，随机的
      "job|1": ["web", "UI", "python", "php"], //工作是数组中的一个
      "img": Mock.Random.image('100x100')
    }]
  })

  // const list = [
  //   { id: 1 },
  //   { id: 2 },
  //   { id: 3 },
  //   { id: 4 },
  //   { id: 5 },
  //   { id: 6 },
  //   { id: 7 },
  //   { id: 8 },
  //   { id: 9 },
  //   { id: 10 }
  // ]

  res.status(200).json({
    userInfo: JSON.stringify(data.userInfo),
    message: 'Got Mock Data!'
  })
}

export default handler