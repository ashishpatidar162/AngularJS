
// You can use scale(-1, 1) to flip the context horizontally 
// and scale(1, -1) to flip it vertically.

// Note that the call to fillText() specifies a negative x coordinate.
//  This is to adjust for the negative scaling factor: -280 * -1 becomes 280, 
//  and text is drawn leftwards from that point.

function draw() {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.scale(-1, 1);
    ctx.font = '48px serif';
    ctx.fillText('Hello world!', -280, 60);
    // ctx.setTransform(1, 0, 0, 1, 0, 0);

}