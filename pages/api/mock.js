const Mock = require('mockjs')

async function handler(req, res) {
  if (req.method === 'GET') {
    // mock 数据生成
    const data = Mock.mock({
      "userInfo|6": [{ //生成|num个如下格式名字的数据
        "id|+1": 1, //数字从当前数开始后续依次加一
        "name": "@cname", //名字为随机中文名字
        "age|18-28": 25, //年龄为 18-28 之间的随机数字
        "sex|1": ["男", "女"], //性别是数组中的一个，随机的
        "img": Mock.Random.image('100x100')
      }]
    })
    // 模拟延迟
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        res.status(200).json({
          userInfo: JSON.stringify(data.userInfo),
          message: 'Got Mock Data!'
        })
      }, 1000)
    }).catch(error => {
      res.status(500).json({ message: `Error ${error}` })
      res.end()
    })
  } else {
    res.status(405)
    res.end()
  }
}

export default handler