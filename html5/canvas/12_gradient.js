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
    //漸層
    //斜對角:
    // let linear = context.createLinearGradient(50, 50, 450, 350);
    //水平:
    let linear = context.createLinearGradient(50, 200, 450, 200);
    //起始為 0 , 終點為 1
    linear.addColorStop(0, 'red');
    linear.addColorStop(1, 'blue');
    linear.addColorStop(0.5, 'yellow');


    context.fillStyle = linear;
    context.fillRect(50, 50, 400, 300);



    // 右邊矩形
    let rightRect = context.createRadialGradient(750, 200, 50, 700, 200, 120);
    rightRect.addColorStop(0, 'red');
    rightRect.addColorStop(1, 'blue');
    context.fillStyle = rightRect;
    context.fillRect(550, 50, 400, 300);

    //左下圓形
    context.translate(250, 600);
    context.beginPath();
    context.lineWidth = 20;

    let radius = 180

    let circle = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    circle.addColorStop(0, '#888');
    circle.addColorStop(0.5, '#fff');
    circle.addColorStop(1, '#888');

    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.strokeStyle = circle;
    context.stroke();



}

window.addEventListener('load', doFirst)












