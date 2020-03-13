
function draw() {

    var canvas = document.getElementById('canvas');

    if (canvas.getContext) {

        var ctx = canvas.getContext('2d');

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(50, 50, 50, 50);
        ctx.strokeRect(60, 60, 30, 30);

        ctx.fillRect(150, 25, 100, 100);
        ctx.clearRect(175, 50, 50, 50);
        ctx.strokeRect(185, 60, 30, 30)
    }
}