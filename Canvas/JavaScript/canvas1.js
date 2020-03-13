
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        //2D rendering context. 
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(100,0,0)';  //rgb(red, green, blue)

        // ctx.fillRect(x, y, width, height);

      
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);   
         //heigth descrease,increase from down side
         //width inc,des from right side
    }
}