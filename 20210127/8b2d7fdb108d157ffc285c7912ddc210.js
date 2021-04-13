window.addEventListener('load', (event) => {
    console.log(1);
    Waline.Widget.RecentComments({
        el: '#waline-recent',
        serverURL: 'http://waline.vercel.app',
        count: 10
    }).then(comments => {
        document.getElementById('waline-recent').innerHTML = comments.map(cmt =>
            `${cmt.nick}: ${cmt.comment}`
        );
    });
});