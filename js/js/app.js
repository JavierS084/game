var Game = function(x, y, w, h) {
    this.x = x;
    this.y = y;

    this.width = w;
    this.height = h;


    var radius = 30;

    var dx = 4;
    var dy = 6;




    this.dibujar = function(ctx) {
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();

        if (this.x + radius > this.width || this.x - radius < 0){
            dx = -dx;
        }
        
        this.x += dx;

        if (this.y + radius > this.height || this.y - radius < 0){
            dy = -dy;
        }
        this.y -= dy;
         
    }

    
}