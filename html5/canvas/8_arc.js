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

    //四分之一線
    context.beginPath();

    context.moveTo(0, 400);
    context.lineTo(1000, 400);
    context.moveTo(500, 0);
    context.lineTo(500, 800);

    context.strokeStyle = 'rgba(0, 0 , 0, 0.7)';
    context.stroke();
    // ======
    // 左上
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 5;

    context.arc(250, 200, 150, 0, Math.PI, false);
    context.stroke();

    //左下
    context.beginPath();
    context.arc(250, 600, 150, 0, 2 * Math.PI);
    context.stroke();

}

window.addEventListener('load', doFirst)












