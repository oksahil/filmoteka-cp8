const cnv = document.getElementById('cnv');
const ctx = cnv.getContext('2d');
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

class Drop {
    constructor() {
        this.x = Math.random() * cnv.width;
        this.y = Math.random() * cnv.height;
        this.r = Math.random() * 3.5;
        this.v = Math.random() * 1.5;
    }

    make() {
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        this.y += this.v;
        if (this.y > cnv.height) {
            this.x = Math.random() * cnv.width;
            this.y = 0;
        }

    }
}

let drops = [];
for (let i = 0; i < 1000; i += 1) {
    drops.push(new Drop());

}

function anm() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, cnv.width, cnv.height)
    drops.forEach(drop => drop.make());
    requestAnimationFrame(anm);
}

anm();