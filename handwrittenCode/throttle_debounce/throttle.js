const con = document.getElementsByClassName('container')[0]
con.addEventListener('scroll', function() {
    setTimeout(() => {
        console.log('throttle')
    }, 200);
})