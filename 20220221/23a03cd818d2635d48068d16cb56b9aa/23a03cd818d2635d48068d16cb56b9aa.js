async function execute() {
  const { access_token } = await getToken()
  var xhr = new XMLHttpRequest()
  xhr.open('post', 'http://172.30.56.76:8002/service/SmartCity3__DomainModeling/0.1.3/QueryInstanceByID')
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('access-token', access_token)
  xhr.send('instanceID=cCTY000000efH15THsqe&schemaID=cHlA000000mIzYuTHa8u')
  xhr.onreadystatechange = async function () {
    if (this.readyState == 4 && this.status == 200) {
      const {
        result: {
          result: { instanceID }
        }
      } = JSON.parse(this.responseText)
      return await seurioweur()
    }
  }
}

function deal(data) {
  Object.keys(data)
    .map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    })
    .join('&')
}

async function getToken() {
  const url = 'http://172.30.56.76:8002/baas/auth/v1.0/oauth2/token'
  const data = {
    client_id: '22d8e63cd40448e29920f5145b745ffb',
    client_secret: '79e733008c491debafbea177896d17401b96e24feb5a902e',
    grant_type: 'client_credentials'
  }
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      api_gateway_auth_app_id: '25798cb5-35de-4524-837b-3d175107801f'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: deal(data)
  })
  return response.json()
}

async function seurioweur() {
  const url = 'http://172.30.56.76:8002/test/script0000001'
  const data = { id: 'seurioweur' }
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  })
  return response.json()
}
