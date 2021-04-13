let here = document.querySelector("#waline-recent");
let str = ' @ '
let reg = /<.*?>/ig;
let date = new Date()
fetch('https://waline1.now.sh/comment?type=recent&count=')
    .then(response => response.json())
    .then(data => {
        let arr = data.filter(item => item.mail !== "7393ce11f9eb873b79ac6a74c39f8eca" && item.pid === undefined)
        arr.splice(10);
        arr.forEach((val) => {
            comment = val.comment.replace(reg, '');
            let gap = formatTime(date - new Date(renderTime(val.updatedAt)))
            here.innerHTML += `<li class="item"><a href=${val.url} data-pjax-state="load"><span class="breadcrumb">${val.nick + str + gap}</span><span>${comment}</span></a></li>`;
        });
    })
    .catch(console.error)

function renderTime(date) {
    let myDate = new Date(date).toJSON();
    return new Date(+new Date(myDate) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}

function formatTime(time) {
    let d = Math.floor(time / (1000 * 60 * 60 * 24));
    let h = Math.floor(time / (1000 * 60 * 60) % 24);
    return d > 0 ? d + ' 天前' : h + ' 小时前'
}