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

    var brickRow = 3;
    var brickColumn = 8;
    
    var brickW = 85;
    var brickH = 20;
    var brickP = 20;
    var brickT = 30;
    var brickL = 40;
    var bricks = [];

    
    
    this.dibujar = function(ctx) {
        
        this.bola(ctx);
        this.paleta(ctx);
        this.brick(ctx);
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

    for( i = 0; i < brickColumn; i++){
        bricks[i] = [];
        for( h = 0; h < brickRow; h++){
            bricks[i][h] = {a: 0, b: 0};
        }
    }
    
    this.brick = function(ctx){
        for(i = 0; i < brickColumn; i++) {
            for(h = 0; h < brickRow; h++) {
                var brickX = (i*(brickW + brickP)) + brickL;
                var brickY = (h*(brickH + brickP)) + brickT;

                bricks[i][h].a = brickX;
                bricks[i][h].b = brickY;

                ctx.beginPath();
                ctx.rect(brickX, brickY, brickW, brickH);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();

            }
        }

    }



    this.mover = function() {

        if (this.x + radius > this.width || this.x - radius < 0){
            dx = -dx;
        }
        

        /* esto permite que rebote de arriba abajo
        if (this.y + radius > this.height || this.y - radius < 0){
            dy = -dy;
        }
        this.y -= dy;
        */

        if(this.y + dy < radius) {
            dy = -dy;

        } else if(this.y + dy > this.height - radius) {
            if(this.x > paletaX && this.x < paletaX + paletaW) {
                dy = -dy;
            }
            else {
                alert("GAME OVER");
                document.location.reload();
            }
        }


        if(rightPressed && paletaX < this.width - paletaW) {
            paletaX += 7;
        }
        else if(leftPressed && paletaX > 0) {
            paletaX -= 7;
        }
        this.x += dx;
        this.y += dy;

    }
    

    
}