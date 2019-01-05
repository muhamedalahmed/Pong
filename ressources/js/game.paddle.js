Game.paddle = function (x, y, $paddle, w ,h) {
    this.x = x ;
    this.y = y ;
    this.w = w;
    this.h = h;

    this.init = function () {
        $paddle.css('left', this.x);
        $paddle.css('top', this.y);
    };
    this.update = function () 
    {
        //checkPaddleMovement();
    };
    this.draw = function () {
         $paddle.css('left', this.x);
         $paddle.css('top', this.y);
    };
    this.init();
};