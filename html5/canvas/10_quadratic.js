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
    context.strokeStyle = 'red';
    context.lineWidth = 5;


    context.beginPath();
    let radius = 100


    context.moveTo(150, 250);
    // context.quadraticCurveTo(250, 100, 350, 300);
    //修改控制點
    context.quadraticCurveTo(300, 600, 350, 300);
    context.stroke();

    //輔助線
    context.strokeStyle = 'blue';
    context.lineWidth = 1;


    context.beginPath();
    context.moveTo(150, 250);
    // context.lineTo(250, 100);
    //修改控制點
    context.lineTo(300, 600);
    context.lineTo(350, 300);
    context.stroke();

    context.fillText('(150, 250)', 130, 265);







    //左下


}

window.addEventListener('load', doFirst)












