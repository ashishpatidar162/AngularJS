// scaling factor of 2.0 increases the unit size so that one unit becomes two pixels; 
// shapes are thus drawn at twice the normal size.

// setTransform(a,b,c,d,e,f)

// a (m11)
// Horizontal scaling. A value of 1 results in no scaling.
// b (m12)
// Vertical skewing.
// c (m21)
// Horizontal skewing.
// d (m22)
// Vertical scaling. A value of 1 results in no scaling.
// e (dx)
// Horizontal translation (moving).
// f (dy)
// Vertical translation (moving).

function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    if (canvas.getContext) {
        // Scaled rectangle
        
        ctx.scale(9, 3);
        ctx.fillStyle = 'red';
        ctx.fillRect(10, 10, 8, 20); //final size (10,10,9*8,3*20)

        // Reset current transformation matrix to the identity matrix
        ctx.setTransform(1, 3, 0, 1, -2, 1);

        // Non-scaled rectangle
        ctx.fillStyle = 'gray';
        ctx.fillRect(10, 10, 8, 20);

      
    }
}