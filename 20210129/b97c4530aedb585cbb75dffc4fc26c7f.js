window.onload = function() {
    let site = "http://sang.pub";
    let str = '@'
    let reg = /<.*?>/ig;
    let date = new Date()
    let here = document.querySelector("#waline-recent");
    let xhr = new XMLHttpRequest();
    xhr.open("get", "https://waline1.now.sh/comment?type=recent&count=");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let arr = JSON.parse(xhr.responseText).filter(function(item) {
                return (
                    item.mail !== "7393ce11f9eb873b79ac6a74c39f8eca" && item.pid === undefined
                );
            });

            arr.splice(10);
            arr.forEach((val) => {
                comment = val.comment.replace(reg, '');
                console.log(val);
                let gap = formatTime(date - new Date(renderTime(val.updatedAt)))
                here.innerHTML += `<li class="item"><a href=${site + val.url}  data-pjax-state><span class="breadcrumb">${val.nick + str + gap}</span><span>${comment}</span></a></li>`;
            });
        }
    };
    xhr.send();

    function renderTime(date) {
        let myDate = new Date(date).toJSON();
        return new Date(+new Date(myDate) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    }

    function formatTime(time) {
        let d = Math.floor(time / (1000 * 60 * 60 * 24));
        let h = Math.floor(time / (1000 * 60 * 60) % 24);
        return d > 0 ? d + ' 天前' : h + ' 小时前'
    }
}