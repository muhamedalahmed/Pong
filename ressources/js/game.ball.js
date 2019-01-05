Game.Ball = function (x,y, $ball , w, h) {
    this.x = x ;
    this.y = y ;
    this.w = w;
    this.h = h;
    this.speed = 2;
    this.speedY= this.speed;
    this.speedX= this.speed;
    this.setBallPosition = function () {
        $ball.css('left', this.x);
        $ball.css('top', this.y);
    };
    this.init = function () {
        this.setBallPosition();
    };
    this.update = function ()
    {
        this.x += this.speedX;
        this.y += this.speedY;
    };
    this.draw = function () {
        this.setBallPosition();
    };
    this.init();
};