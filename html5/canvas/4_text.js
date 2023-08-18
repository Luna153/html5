function doFirst() {
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')


    context.font = 'bold 50px Tahoma';


    // 第一個字
    // context.textBaseline='top | hanging | middle | alphabetic(by default) | ideographic | bottom';
    context.textBaseline = 'alphabetic';



    // context.fillText('yellow', 100, 100);
    context.strokeText('yellow', 100, 100);


    context.strokeStyle = 'red';
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.stroke();

    context.beginPath();
    context.arc(100, 100, 10, 0, 2 * Math.PI);
    context.stroke();


    // 第二個字: 加上陰影
    context.shadowColor='red';
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.shadowBlur=5;
    
    context.fillText('yellow', 100, 250);

    // 第三個字: 四邊都有陰影
    context.shadowOffsetX=0;
    context.shadowOffsetY=0;
    context.shadowBlur=15;

    context.fillStyle='#fff';  
    context.fillText('yellow', 100, 400);

    // 第四個字: 多重陰影
    // 重疊顏色順序和 css 顏色相反
    context.shadowOffsetX=5;
    context.shadowOffsetY=5;
    context.shadowBlur=10;

    context.shadowColor='red';
    context.fillText('yellow', 100, 550);

    context.shadowColor='blue';
    context.fillText('yellow', 100, 550);









}
window.addEventListener('load', doFirst)
