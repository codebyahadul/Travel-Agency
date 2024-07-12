// for navbar toggling
function toggleMenu() {
    const navUl = document.getElementById('nav-ul');
    navUl.classList.toggle('show');
}
// functionality for testimonial
const testimonials = [
    {
        img: './images/person1.png',
        text: '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto illo sunt hic facere accusantium eum dolorum eveniet reprehenderit sed adipisci recusandae quae rerum, consequatur natus autem tempora ut facilis fugiat commodi. Accusantium consequatur iusto quae ullam asperiores placeat dolores adipisci, voluptatem architecto nesciunt recusandae, saepe quibusdam quod repellat ex cupiditate!"',
        name: 'Mike Taylor',
        location: 'Lahore, Pakistan'
    },
    {
        img: './images/person1.png',
        text: '"Another testimonial text goes here. It should describe the experience of another person who used your service or product. It should be positive and encouraging."',
        name: 'Jane Doe',
        location: 'New York, USA'
    }
];

function showTestimonial(index) {
    document.getElementById('testimonial-img').src = testimonials[index].img;
    document.getElementById('testimonial-text').textContent = testimonials[index].text;
    document.getElementById('person-name').textContent = testimonials[index].name;
    document.getElementById('person-location').textContent = testimonials[index].location;
}
