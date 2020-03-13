function draw() {
     canvas = document.getElementById('canvas');
    if(canvas.getContext){
     ctx = canvas.getContext('2d');

    ctx.setTransform(1, .2, .8, 1, 0, 0);
    ctx.fillRect(0, 0, 100, 100);
}
}