    async userDataListByParamsHttp() {
      let query = {
        id: this.value * 1,
        startTime: dayjs(this.date).format('YYYY-MM-DD')
      }
      console.log(query, 'query')
      const url = process.env.VUE_APP_BASEURL + '/statistics/manage/user/export/userDataListByParams'
      try {
        const loading = this.$loading()

        const res = await axios({
          url,
          method: 'get',
          params: query,
          responseType: 'blob',
          headers: {
            'Content-Type': 'application/json',
            ticket: localStorage.getItem('ticket')
          }
        })
        const name = res.headers['content-disposition'].split('=')[1]
        const reader = new FileReader()

        console.log(name, reader, 'readerreader')
        reader.readAsDataURL(res.data)
        reader.onload = function (e) {
          const a = document.createElement('a')
          a.href = e.target.result
          a.download = name
          console.log(this)
          a.click()
          loading.close()
        }
      } catch (error) {
        console.log(error)
      }
    }