function doFirst() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d')
    canvas.width = 400;
    canvas.height = 400;


    context.moveTo(0, 0);
    context.lineTo(50, 50);
    
    context.strokeStyle='red';
    context.stroke();
    
    
    

}
window.addEventListener('load', doFirst)