function doFirst() {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')


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

    // 宣告變數型態: pic 是 Image物件的型態
    let pic = new Image()
    pic.src = `../../images/cityscape.jpg`
    pic.addEventListener(`load`, function () {
        // 內嵌外部內容 會發生load事件 所以要建立事件聆聽功能
        // context.drawImage(pic, 0, 0);
        // context.drawImage(pic, 0, 0, 1000, 800);
        context.drawImage(pic, 0, 0, canvas.width, canvas.height);
    })
    // context.drawImage(Image, dX, dY, dWidth, dHeight);
    // 方法的參數Image是內建物件

    // 整理:
    // 1.宣告變數型態
    // 2.使用該型態屬性





}
window.addEventListener('load', doFirst)
