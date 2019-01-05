<!DOCTYPE html>
<html>
<head>
    <title>Pong</title>
    <link rel="stylesheet" type="text/css" href="ressources/css/game.css">
</head>
<body>

<div id="game" onclick="stop()" onclick="start()">
    <div id="canvas-container"></div>
    <div class="paddle a"></div>
    <div class="paddle b"></div>
    <div class="paddle c"></div>
    <div class="paddle d"></div>
    <div class="ball"></div>
</div>
First name: <input class="first_name">
<h3 class="output"></h3>
<button id="say">Say hi!</button>
<div class="pointer a">A: 0</div>
<div class="pointer b">B: 0</div>
<div class="pointer c">C: 0</div>
<div class="pointer d">D: 0</div>
<div class="control">
            <span class="reset">
                <input type="submit" value="Reset">
                <!-- <input type="button" onclick="Reset()" value="Reset">-->
            </span>
    <span class="break">
                <input type="submit" value="Break">
            </span>
    <span class="start">
                <input type="submit" value="Start">
            </span>
</div>


<!--<div id="game" onclick="stop()" onclick="start()">-->
<!--    <div id="canvas-container"></div>-->
<!--    <div class="paddle a"></div>-->
<!--    <div class="paddle b"></div>-->
<!--    <div class="ball"></div>-->
<!--</div>-->

<script type="text/javascript">
    function stop() {
        if(MainLoop.isRunning()) {
            MainLoop.stop();
        } else {
            MainLoop.start();
        }
    }
</script>
<div class="control">
            <span class="reset">
                <input type="submit" value="Reset">
            </span>
    <span class="break">
                <input type="submit" value="Break">
            </span>
    <span class="start">
                <input type="submit" value="Start">
            </span>
</div>
<script src="/ressources/js/jquery-3.3.1.js"> </script>
<script src="/ressources/js/mainloop.js"> </script>
<script src="/ressources/js/game.js"> </script>
<script src="/ressources/js/Fireworks.js"> </script>
<script src="/ressources/js/game.paddle.js"> </script>
<script src="/ressources/js/game.ball.js"> </script>
<script type="text/javascript">
    var game = new Game();
</script>


</body>
</html>