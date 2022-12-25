const pauseBtn = document.querySelector('.btn-js-pause');
const playBtn = document.querySelector('.btn-js-play');

playBtn.style.display = 'none';

class LoopingElement {
    constructor (element, currentTranslation, speed) {
        this.element = element;
        this.currentTranslation = currentTranslation;
        this.speed = speed;
        this.direction = true;

        this.lerp = {
            current: this.currentTranslation,
            target: this.currentTranslation,
            ease: 0.1,
        };
        this.events();
        this.render();
    }

    events() {
        pauseBtn.addEventListener('click', (e) => {
            if (e.currentTarget) {
                this.speed = 0;
                pauseBtn.style.display = 'none';
                playBtn.style.display = 'flex';
            }
        })

        playBtn.addEventListener('click', (e) => {
            if (e.currentTarget) {
                this.speed = 0.07;
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'flex';
            }
        })
    }

    lerpFunc(current, target, ease) {
        this.lerp.current = current * (1 - ease) + target * ease;
    }

    forward() {
        this.lerp.target += this.speed;
        if (this.lerp.target > 100) {
            this.lerp.current -= 100 * 2;
            this.lerp.target -= 100 * 2;
        }
    }

    animate() {
        this.forward();
        this.lerpFunc(this.lerp.current, this.lerp.target, this.lerp.ease);

        this.element.style.transform = `translateX(${this.lerp.current}%)`;
    }

    render() {
        this.animate();
        window.requestAnimationFrame(() => this.render());
    }
}

let elements = document.querySelectorAll('.dynamic__gallery__wrapper');

let newLol = new LoopingElement(elements[0], 0, 0.07);
let highLol = new LoopingElement(elements[1], -100, 0.07);
