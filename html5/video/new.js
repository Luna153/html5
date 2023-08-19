function doFirst() {
    //先跟 HTML 畫面產生關聯

    myMovie = document.getElementById('myMovie')
    playButton = document.getElementById('playButton')
    defaultBar = document.getElementById('defaultBar')
    progress = document.getElementById('progress')

    // barsize=defaultBar.style.width
    // console.log(barsize)
    // defaultBar.style.width='600px'
    barsize = parseInt(getComputedStyle(defaultBar).width)
    // alert(barsize)


    //再建事件聆聽功能
    playButton.addEventListener('click', playOrPause)
    defaultBar.addEventListener('click', clicked)

    //全螢幕
    // document.getElementById('fullButton').onclick=function(){
    //     myMovie.webkitEnterFullScreen()
    // }
}
function playOrPause() {
    // console.log("play")
    //影片有三種可能: 正在跑 、暫停 paused、結束 ended (影片的屬性)
    if (!myMovie.paused && !myMovie.ended) { //影片正在跑
        myMovie.pause()
        playButton.innerText = 'play'
    } else {
        myMovie.play()
        playButton.innerText = 'pause'
        setInterval(update, 300)
    }
}
function update() {
    if (!myMovie.ended) {
        let size = barsize / myMovie.duration * myMovie.currentTime
        progress.style.width = `${size}px`
    } else {
        progress.style.width = `0px`
        playButton.innerText = 'play'
        //跑完讓卷軸歸零
        myMovie.currentTime = 0


        // 卷軸從開始到mouse移動的地方 = e.clientX - 物件和螢幕左邊的距離
        // js寫法: defaultBar.offsetLeft
        // jquery寫法: $(物件).offset().left
    }

}
function clicked(e) {
    // e.target = defaultBar
    let mouseX = e.clientX - defaultBar.offsetLeft
    progress.style.width = `${mouseX}px`

    let newTime = mouseX / (barsize / myMovie.duration)
    myMovie.currentTime = newTime
}
window.addEventListener('load', doFirst)
// bar 共 635px , 影片共 92sec
// 635px / 92sec => 6.9px / sec * 10sec => 69px 
