exports.route = {
    // 获取所有的可以查询的学期
    async get () {
        let now = +moment()
        let rawData = await this.get(`http://58.192.114.179/classroom/common/gettermlistex?_=${now}`)
        return rawData.data
    }
}