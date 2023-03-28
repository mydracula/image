async function arrayBufferToBase64(buffer) {
  let binary = ''
  const bytes = new Uint8Array(buffer)
  const len = bytes.byteLength
  for (let i = 0; i < len; i += 1) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
    .replace(/[-]/g, '')
}

export async function onRequestPost(context) {
  const { request } = context
  let outBody,
    outStatus = 204,
    outHeaders = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, PATCH, POST, DELETE',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json'
    }),
    reqHeaders = new Headers(request.headers)

  try {
    let or, uuid, pathname, filename, ext, content
    let sp = new URL(request.url).searchParams
    or = sp.get('or') || ''
    filename = (sp.get('name') || '').trim().replace(/\//g, '')
    pathname = (sp.get('pathname') || '').trim()
    ext = '.' + filename.split('.')[1]
    const formData = await request.formData()
    const file = formData.get('file')
    let buffer = await file.arrayBuffer()
    content = await arrayBufferToBase64(buffer)
    let now = new Date(Date.now() + 8 * 3600 * 1000).toISOString().replace('Z', '')
    //路径及名称
    if (pathname == '') {
      pathname = now.replace(/[-T.]/g, '').substr(0, 8)
    }

    uuid = uuidv4()

    //完整链接
    let uri = `https://api.github.com/repos/${or}/contents/${pathname}/${uuid}${ext}`

    //调整头
    reqHeaders.set('Authorization', `token ${context.env.GITHUB_TOKEN}`)
    reqHeaders.set('Content-Type', 'application/json')

    //发起 fetch
    let res1 = await fetch(uri, {
      method: 'PUT',
      body: JSON.stringify({
        message: 'init',
        content: content
      }),
      headers: reqHeaders
    })

    let res2 = await fetch('https://telegra.ph/upload', {
      method: 'POST',
      body: formData
    })

    成功
    if (res1.status == 201) {
      outBody = JSON.stringify({
        code: 200,
        msg: '请求成功',
        data: {
          '7ED': `https://raw.githubusercontents.com/${or}/master/${pathname}/${uuid}${ext}`,
          JsDelivr: `https://testingcf.jsdelivr.net/gh/${or}@master/${pathname}/${uuid}${ext}`,
          telegra: res2[0]?.src || res2[0].error
        }
      })
      outStatus = 200
    } else {
      outBody = res1.body
      outStatus = res1.status
    }
  } catch (err) {
    outBody = JSON.stringify(err.stack) || err
    outStatus = 500
  }

  return new Response(outBody, {
    status: outStatus,
    headers: outHeaders
  })
}
