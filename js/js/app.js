var Game = function(x, y, w, h){
    this.x = x;
    this.y = y;

    this.width = w;
    this.height = h;

    var radius = 30;
    var dx = 4;
    var dy = 6;

    var paletaW = 75;
    var paletaH = 10;
    var paletaX = (this.width - paletaW)/2

    var rightPressed = false;
    var leftPressed = false;



    this.dibujar = function(ctx) {
       
        this.bola(ctx);
        this.paleta(ctx);
        this.mover();
         
    }

    this.bola = function(ctx){

        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI*2);  
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();

    }


    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = true;
        }
        else if(e.keyCode == 37) {
            leftPressed = true;
        }
    }
    
    function keyUpHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = false;
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
        }
    }

    this.paleta = function(ctx){
        ctx.beginPath();
        ctx.fillRect(paletaX, this.height - paletaH, paletaW, paletaH);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();

    }



    this.mover = function() {

        if (this.x + radius > this.width || this.x - radius < 0){
            dx = -dx;
        }
        
        this.x += dx;

        if (this.y + radius > this.height || this.y - radius < 0){
            dy = -dy;
        }
        this.y -= dy;



        if(rightPressed && paletaX < this.width - paletaW) {
            paletaX += 7;
        }
        else if(leftPressed && paletaX > 0) {
            paletaX -= 7;
        }

    }
    

    
}