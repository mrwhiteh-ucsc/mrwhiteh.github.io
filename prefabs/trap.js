// trap prefab
class trap extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add an object to existing scene
        scene.add.existing(this);
        //add trap sfx
        this.sfxtrap = scene.sound.add('sfx_toss');
        //firing status
        this.isFiring = false;
    }

    update() {
        // left/right movement
        if (!this.isFiring) {
            if (keyLEFT.isDown && this.x >= 47) {
                this.x -= 2;
            } else if (keyRIGHT.isDown && this.x <= 578) {
                this.x += 2;
            }
        }
        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxtrap.play();  // play sfx
        }
        // if fired, move up
        if (this.isFiring && this.y >= 108) {
            this.y -= 2;
        }
        // reset on miss
        if(this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
    }
    //reset to bottom
    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}