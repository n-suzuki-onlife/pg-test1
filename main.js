enchant();
window.onload = function() {
    game = new Game();
    game.onload = function() {
        hello = new Label("Hello, PhoneGap World");
        hello.x = 10;
        hello.y = 150;
        game.rootScene.addChild(hello);
    }
    game.start();
}