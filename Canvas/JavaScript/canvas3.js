function draw(){

    var canvas=document.getElementById('canvas');

    if(canvas.getContext){

        var ctx=canvas.getContext('2d');
//Consiontrate only points
        console.log(ctx);
        ctx.beginPath();
        ctx.moveTo(75,50);
        ctx.lineTo(100,70)
        // ctx.lineTo(120,50);
        // ctx.lineTo(140,25);
        ctx.lineTo(100,25);
        ctx.fill();
    }
}