// https://cdn.jsdelivr.net/gh/mydracula/image@master/20210127/02250c73f83f5445831c0d604bbc58a2.js
window.addEventListener('load', function () {
    Waline.Widget.RecentComments({
        el: '#waline-recent',
        serverURL: 'https://waline1.now.sh',
        count: 10
    });
});