window.onload = function() {
    let site = "http://sang.pub";
    let str = ' @ '
    let reg = /<.*?>/ig;
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
                console.log(val.pid);
                here.innerHTML += `<li class="item"><a href=${site + val.url}><span>${comment}</span></a></li>`;
            });
        }
    };
    xhr.send();
}