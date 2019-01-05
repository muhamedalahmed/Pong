Game = function () {
    var $paddleA = $('.paddle.a');
    var $paddleB = $('.paddle.b');
    var $paddleC = $('.paddle.c');
    var $paddleD = $('.paddle.d');
    var $pointerA = $('.pointer.a');
    var $pointerB = $('.pointer.b');
    var $pointerC = $('.pointer.c');
    var $pointerD = $('.pointer.d');
    var $game = $('#game');
    var $ball = $('.ball');
    var map = {38: false, 40:false, 87: false, 83:false, 32:false, 39:false, 37:false, 68:false, 69:false};
    var paddleSpeed = 5;
    var $break = $('.break');
    var $start = $('.start');
    var $reset = $('.reset');
    var $scoreA = 0;
    var $scoreB = 0;
    var $scoreC = 0;
    var $scoreD = 0;
    var $ferstName = $('.first_name');
    var $nameOutput = $('.output');
    var $say = $('#say');

    // Add a Player Name
    $say.click(function (){
        $nameOutput.html($ferstName);
        $pointerC.html($ferstName);
    });

    //OOP
    function player(name) {
        this.name = name;
    }
    player.person = function () {
        console.log("Hier ist This"+ this.name);
    };
    var person1 = new player("dsfdsfds");
    var person2 = new player("dsfdsfds");

    $pointerA.html(person1); $pointerB.html(person2);





    var paddleA = new Game.paddle($paddleA.position().left, $paddleA.position().top, $paddleA, $paddleA.width(), $paddleA.height() );
    var paddleB = new Game.paddle($game.width() - $paddleB.width() ,$paddleB.position().top ,$paddleB , $paddleB.width(), $paddleB.height());
    var paddleC = new Game.paddle($paddleC.position().left, $paddleC.position().top, $paddleC, $paddleC.width(), $paddleC.height() );
    var paddleD = new Game.paddle($game.width() - $paddleD.width() ,$paddleD.position().top ,$paddleD , $paddleD.width(), $paddleD.height());
    var ball = new Game.Ball($game.width() /2 - $ball.width()/2 , $game.height()/2 - $ball.height() / 2 ,$ball , $ball.width(), $ball.height());
    var update = function() {
        paddleA.update();
        paddleB.update();
        paddleC.update();
        paddleD.update();
        ball.update();
        checkPaddleMovement();
        checkCollision();
        checkBounds();

    };
    var draw = function(){
        paddleA.draw();
        paddleB.draw();
        paddleC.draw();
        paddleD.draw();
        ball.draw();
    };



    MainLoop.setUpdate(update).setDraw(draw).start();

    $break.click(function () {
        MainLoop.stop();
    });
    $start.click(function () {
        MainLoop.start();
    });
    $reset.click(function () {
        $pointerA.html(0);
        $pointerB.html(0);
        $pointerC.html(0);
        $pointerD.html(0);
        $scoreA = 0;
        $scoreB = 0;
        $scoreC = 0;
        $scoreD = 0;
    });
    var collision = function (object1, object2) {
        if (object1.x < object2.x + object2.w && object1.x + object1.w > object2.x &&
            object1.y < object2.y + object2.h && object1.y + object1.h > object2.y) {
            return true;
        }
        return false;
    };
    var checkCollision = function () {
        if (collision(ball, paddleA)) {
            ball.speedX = -ball.speedX;
            $scoreA++;
            $pointerA.html($scoreA);
        };
        if (collision(ball, paddleB)) {
            ball.speedX = -ball.speedX;
            $scoreB++;
            $pointerB.html($scoreB);
        };
        if (collision(ball, paddleC)) {
            ball.speedY = -ball.speedY;
            $scoreC++;
            $pointerC.html($scoreC);

        };
        if (collision(ball, paddleD)) {
            ball.speedY = -ball.speedY;
            $scoreD++;
            $pointerD.html($scoreD);

        };
    };

    var checkBounds = function () {
        if (ball.y < 0 || ball.y + $ball.height() > $game.height()) {
            ball.speedY =  -ball.speedY;
        }
        if (ball.x < 0 || ball.x + $ball.width() > ($game.width())) {
            ball.speedX = -ball.speedX;
        }
    };

    var checkPaddleMovement = function () {
        //Paddele B
        if (map[38] && !(paddleB.y < 0)) {
            paddleB.y -= paddleSpeed;
        }
        if (map[40] && !((paddleB.y + $paddleB.height()) > $game.height())) {
            paddleB.y += paddleSpeed;
        }
        //Paddele A
        if (map[83] && !((paddleA.y + $paddleA.height()) > $game.height())) {
            paddleA.y += paddleSpeed;
        }
        if (map[87] && !(paddleA.y < 0)) {
            paddleA.y -= paddleSpeed;
        }


        //PaddleC
        if (map[39] && !((paddleC.x + $paddleC.width()) > $game.width())) {
            paddleC.x += paddleSpeed;
        }
        if (map[37] && !(paddleC.x < 0)) {
            paddleC.x -= paddleSpeed;
        }

        //PaddleD
        if (map[69] && !((paddleD.x + $paddleD.width()) > $game.width())) {
            paddleD.x += paddleSpeed;
        }
        if (map[68] && !(paddleD.x < 0)) {
            paddleD.x -= paddleSpeed;
        }
    };

    //Check Keypress.
    $(document).on("keydown", function(e) {
        //console.log(e.keyCode);
        if (e.keyCode in map) {
            map[e.keyCode] = true;
        }
    }).keyup(function(e) {
        if (e.keyCode in map) {
            map[e.keyCode] = false;
        }
    });


    $(document).on("keydown", function(event) {
        if (event) {
            if (event.keyCode == 32 || event.which == 32) {
                if (MainLoop.isRunning()) {
                    MainLoop.stop();
                } else {
                    MainLoop.start();
                }
            }
        }
    });
};
