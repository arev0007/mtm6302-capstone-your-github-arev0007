//get id and create an array
const gallery = document.getElementById('gallery');
const pop = document.getElementById('popup');
const pokecard = document.getElementById('pokecard')
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12];
const slectedIndex = null;
//create images
imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `/css/images/card${i}.png`;
    image.classList.add('collectionImg');
    gallery.appendChild(image);

    image.addEventListener('click', () =>{
        pokecard.src = `/css/images/card${i}.png`;
    })
    gallery.appendChild(image);

});



const buttton = document.getElementById('button')
const buttonColor = document.getElementById('buttonColor')
button.addEventListener('click', function() {
    button.innerHTML = 
    `<img class="pokecolor" src="css/images/pokecolor.png" alt="character" />`
    buttton.classList.add('show')
  })
