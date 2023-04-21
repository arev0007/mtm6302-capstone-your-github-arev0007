Aldana Arevalo
ID: 041022481
Project: Pokedex


Characteristics:
Color palette
#081B42
#4B43ED 
#FFC906 
#FFFFB

Typography
H1: Powerr Bold / Apex Mk2 Bold
Ph: Comfortaa Regular


The Pokedex web is a vibrant and animated application. Blue and yellow are the main colours. There are three different types of fonts to describe the content. As the main section is a gallery, it can be seen like a grid. When the user hover the pictures, the number of the pokemon is displayed. There is also an option to discover more pokemon. In addition, there is a card section which displays the specific information of the pokemon. For instance, the user can check the type, ability, weaknesses, category and extra information. Finally, the user can see a black and white pokeball at the top on the right which means the availability to be caught. Once the user selects the pokeball, it changes its colour. 

The layout is the same for desktop and tablet. However, it has been adapted for mobile. The slider shows the pokemon collection. 

Part 3
The gallery is created using JavaScript. Interaction involves animation that displays information about the characters. When a character is selected, a card appears showing specific information about it. A Pokeball is created as a button to catch the character. The Pokeball changes color when the user clicks on it.


Capstone Project - Part 4
The Pokedex gallery was created by using the PokeAPI to fetch information about the Pokemon characters as well as to display it in a grid. 

A number of functions were defined to handle different aspects:

The fetchPokemon function fetches a specified number of the Pokemon character from the PokeAPI and allows to get the results into an array of objects with id, name , and image properties. It also calls the “displayPokemon” function to display the data in the HTML document. 

The displayPokemon function was defined to generate an HTML string that displays each Pokemon’s name and image in a list format.

The selectPokemon function was defined to verify whether the selected Pokemon character is already stores in the “pokeCache” or if the Pokemon is not in the cache, the function fetches its data. 

The displayPopup function is called to display a detailed information, such as name, type, weight, height, and abilities, about the Pokemon character. This function is closed by using closePopup function.

The addMore function was defined to  set the 20 Pokemon and the addMore button was defined to display more Pokemon. 


Challenges:

Adjusting the data to store the selected Pokemon through the pokeCache was one of the main challenges. I used and tested external resources to solve it. 
The detailed Pokemon information was complicated to make it work, so it relied on external resources.


Resources:
https://www.youtube.com/@JamesQQuick
https://www.w3schools.com/default.asp


