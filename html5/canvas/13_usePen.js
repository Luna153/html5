function doFirst() {
    let canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')

    //格線
    if (canvas.width > canvas.height) {
        range = canvas.width / 50
    } else {
        range = canvas.height / 50
    }
    for (let i = 0; i < 100; i++) {
        let interval = i * 50
        //interval 間隔

        // 水平線
        context.moveTo(0, interval);
        context.lineTo(canvas.width, interval);
        context.fillText(interval, 0, interval);


        //垂直線
        context.moveTo(interval, 0);
        context.lineTo(interval, canvas.height);
        context.fillText(interval, interval, 10);
    }
    context.strokeStyle = 'rgba(0, 0 , 0, 0.3)';
    context.stroke();
    // ======

    canvas.addEventListener('mousemove', drawing)



}
function drawing(e) {
    console.log(e)
    //矩形畫筆
    context.fillStyle = 'maroon';
    context.strokeStyle = 'maroon';

    // context.fillRect(e.pageX, e.pageY, 5, 5);
    //pageX:事件物件的屬性
    //有事件物件的屬性, 要引用事件: drawing(e)放參數 e


    //圓形畫筆
    context.beginPath();
    context.arc(e.pageX, e.pageY, 5, 0, 2 * Math.PI);
    // context.fill();
    context.stroke();
    
    

}

window.addEventListener('load', doFirst)












