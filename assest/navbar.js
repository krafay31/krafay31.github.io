
/*navbar */

document.getElementById("search-icon").addEventListener("click", function() {
    var searchbar = document.querySelector(".search-bar");
    searchbar.style.display = (searchbar.style.display === "none") ? "block" : "none";
 });


 /*portfolio-photos*/

 const categoryButtons = document.querySelectorAll('.category-btn');
 const photoCollection = document.querySelector('.photo-collection');

 const images = [
    { src: 'code1', alt: 'Code Example 1', category: 'code' },
    { src: 'design1.jpg', alt: 'Design Example 1', category: 'design' },
    { src: 'photo1.jpg', alt: 'Photo Example 1', category: 'photo' },
    // Add more image objects as needed
 ];

 categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
       const category = button.getAttribute('data-category');
       photoCollection.innerHTML = '';

       images.forEach(image => {
          if (category === 'all' || image.category === category) {
             const imgElement = document.createElement('img');
             imgElement.src = image.src;
             imgElement.alt = `${image.category.charAt(0).toUpperCase() + image.category.slice(1)} Example`;
             photoCollection.appendChild(imgElement);
          }
       });
    });
 });


 /*sponsor*/
 $('#sponsor-carousel').carousel({
   interval: 3000,
   cycle: true
 }); 