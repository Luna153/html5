function doFirst() {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')
    // 繪製2D圖片

    context.fillStyle = 'red';
    context.strokeStyle = 'blue';



    // (x,y,width,height):
    context.fillRect(100, 100, 300, 200)
    // 個別矩形描邊

    context.strokeRect(100, 100, 300, 200)
    // 填滿

    context.clearRect(150, 150, 50, 50)
    // 擦掉一塊



    context.rect(700, 500, 300, 300)
    // 全部矩形 畫矩形(畫面看不到)
    // context.fill()
    // 填滿
    context.stroke()

    // 橡皮擦
    // context.clearRect(0, 0, canvas.width, canvas.height)
}
window.addEventListener('load', doFirst)
// 呼叫方式---->
// 1.直接呼叫:drawing()
// 2.事件聆聽:theButton.onclick=drawing
// 3.計時器:setInterval(drawing,500)
// 有條件的呼叫不加()

// ---------------------------------
//     window.onload=doFirst
// ---------------------------------
//     window.onload=function() { }