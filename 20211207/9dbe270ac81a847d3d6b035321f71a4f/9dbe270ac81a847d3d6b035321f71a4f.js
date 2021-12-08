const rule = ['image', 'video', 'audio', 'text']
    const content = [
      {
        id: 5,
        isDelete: 0,
        sign: '测试1',
        signId: 3,
        content: [
          {
            name: '喜洋洋1.jpg',
            size: 1,
            type: 'image',
            value: 'http://tuchuan2014.vicp.cc/storage/20211203/24c43389c841474b81ff9418c3a8551a.jpg'
          },
          {
            size: 2,
            type: 'video',
            value: 'http://tuchuan2014.vicp.cc/storage/20211203/24c43389c841474b81ff9418c3a8551a.jpg'
          },
          {
            size: 3,
            type: 'text',
            value: '哈哈'
          },
          {
            size: 4,
            type: 'audio',
            value: 'http://tuchuan2014.vicp.cc/storage/20211203/24c43389c841474b81ff9418c3a8551a.jpg'
          }
        ]
      },
      {
        id: 6,
        isDelete: 0,
        sign: '测试1',
        signId: 3,
        content: [
          {
            name: '喜洋洋1.jpg',
            size: 5,
            type: 'text',
            value: 'http://tuchuan2014.vicp.cc/storage/20211203/24c43389c841474b81ff9418c3a8551a.jpg'
          },
          {
            size: 6,
            type: 'audio',
            value: 'http://tuchuan2014.vicp.cc/storage/20211203/24c43389c841474b81ff9418c3a8551a.jpg'
          }
        ]
      }
    ]

    let newa = content.flatMap((item) => {
      for (const i of rule) {
        // console.log(i, '00')
        let o = item.content.find((sub) => sub.type == i)
        if (o) {
          return {
            id: item.id,
            isDelete: item.isDelete,
            sign: item.sign,
            signId: item.signId,
            type: o.type
          }
        }
      }
    })
    console.log(newa)