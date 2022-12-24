import { posts } from '../posts';
import maqruee from 'vanilla-marquee';

const galleryEl = document.querySelector('.marquee__list');
const newPosts = createElement(posts);


galleryEl.insertAdjacentHTML('afterbegin', newPosts);

function createElement(gallery) {
    return gallery.map(({ link, trailer, description, ganre }) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" 
                href="${trailer}">
                    <div class="marquee__photo">
                        <img
                        class="gallery__image"
                        src="${link}"
                        alt="${description}"
                        />
                    </div>
                    <div class="marquee__content">
                        <p class="marquee__title">${description}</p>
                        <p class="marquee__ganre">${ganre}</p>
                    </div>
                </a>
            </li>
        `;
    }).join(''); 
}