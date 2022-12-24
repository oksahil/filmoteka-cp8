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

        this.render();
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
console.log(elements[0]);
console.log(elements[1]);

// elements.forEach(element => {
//     new LoopingElement(element, 100, 0.2);
// });
let newLol = new LoopingElement(elements[0], 0, 0.07);
let highLol = new LoopingElement(elements[1], -100, 0.07);