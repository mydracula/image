window.addEventListener('load', (event) => {
    console.log(1);
    Waline.Widget.RecentComments({
        el: '#waline-recent',
        serverURL: 'https://waline-swart.vercel.app',
        count: 10
    });
});