
function render(array) {
    const mainList = document.querySelector('.listaPokemons')
  
    mainList.innerHTML = ''
  
    array.forEach( async ({name}) => {
      const pokerData = await getPokemonByName(name)

      console.log(pokerData)
      const card = criandoCardPokemon(pokerData)
  
      mainList.append(card)
    })
  }
 
 
  function criandoCardPokemon({name,sprites}) {
    // console.log(pokemon.name)
    // console.log(pokemon.sprites)
    const container = document.createElement('li')
    const divImagemP= document.createElement('div')
    const image = document.createElement('img')
    const p = document.createElement('p')
    
    container.classList.add('cardPokemon')
    image.classList.add('imagemPokemon')
    p.classList.add('nomePokemon')
    divImagemP.classList.add('divImagemP')

 
  
    image.src = sprites.other.dream_world.front_default
    p.innerText = name
    container.append(image, p)
  
    return container
  }
  
  // const {name, img} = element