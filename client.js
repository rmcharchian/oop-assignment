console.log('client.js running');

class ShampooBottle {
    constructor(volume, scent) {
        this.volume = volume;
        this.scent = scent;
        this.fillVolume = 0;
    }
    fill(volumeToFill) {
        if(this.fillVolume + volumeToFill <= this.volume) {
            this.fillVolume = this.fillVolume + volumeToFill;
        } else {
            console.log('Container is way too full and overflowing!');
        }
    }

}


let bottle = new ShampooBottle(10, 'Blueberry');








console.log(bottle.fillVolume);
bottle.fill(12);
console.log(bottle.fillVolume);





































