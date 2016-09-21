module GitTestTypescript.Client {

    export class GameEngine extends Phaser.Game {

        constructor() {
            super(1024, 800, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level01', Level01, false);

            this.state.start('Boot');
            //Adding comments I expect to see in the game.js across the branch
            if (true) { }
            if (false) { } // should never run

        }
    }
}

window.onload = () => {
    new GitTestTypescript.Client.GameEngine();
};