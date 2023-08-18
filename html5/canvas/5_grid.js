function doFirst() {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    //找規則:
    // context.moveTo(0, 50);
    // context.lineTo(1000, 50);
    // context.stroke();

    // context.moveTo(0, 100);
    // context.lineTo(1000, 100);
    // context.stroke();

    //格線
    if (canvas.width > canvas.height) {
        range = canvas.width / 50
    } else {
        range = canvas.height / 50
    }
    for (let i = 0; i < range + 1; i++) {
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

    // context.moveTo(50, 0);
    // context.lineTo(50, 800);
    // context.stroke();

    // context.moveTo(100, 0);
    // context.lineTo(100, 800);
    // context.stroke();




}
window.addEventListener('load', doFirst)
