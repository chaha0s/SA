const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        remove();
        image.classList.add('img-active');
    })
})

const remove = () => {
    images.forEach(image => {
        image.classList.remove('img-active');
    })
}

