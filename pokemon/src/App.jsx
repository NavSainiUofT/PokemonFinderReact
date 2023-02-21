import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PokemonInfo from './components/PokemonInfo'


function App() {
  const [searchVal, setSearchVal] = useState("")
  const [showInfo, setShowInfo] = useState(false)
  const [pokemonInfo, setPokemonInfo] = useState({})

  //pokemon data states
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonHeight, setPokemonHeight] = useState("")
  const [pokemonImgUrl, setPokemonImgUrl] = useState("")
  const [pokemonGameIndex, setPokemonGameIndex] = useState("")
  const [pokemonBaseStats, setPokemonBaseStats] = useState({})

  //when user looks up a new pokemon, pokemonInfo state changes and all the variables update
  useEffect(() => {
    try {
      setPokemonName(pokemonInfo.name)
      setPokemonHeight(pokemonInfo.height)
      setPokemonImgUrl(pokemonInfo.sprites.other["official-artwork"].front_default)
      setPokemonGameIndex(pokemonInfo.game_indices[19].game_index)
      setPokemonBaseStats(
      {"hp":pokemonInfo.stats[0].base_stat,
      "attack":pokemonInfo.stats[1].base_stat,
      "defense":pokemonInfo.stats[2].base_stat,
      "specialAttack":pokemonInfo.stats[3].base_stat,
      "specialDefense":pokemonInfo.stats[4].base_stat,
      "speed":pokemonInfo.stats[5].base_stat})

      setShowInfo(true)
    }
    catch {
      (e) => console.log(e.message.log())
    }

  }, [pokemonInfo])

  //this function calls to the api with the name of the pokemon to retrieve the data
  //the async call is used to ensure the data is recieved while other app wide tasks occur
  const pokeCall = async (name) => {
    try{
    await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then(res => res.json())
      .then(data => {
        setPokemonInfo(data)
      })}
      catch{(e)=>e.message.log()}
  }

  const pokeClick = () => {
    pokeCall(searchVal)
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="App">
        <div className='searchBar mt-4 container'>

          <input type="text" placeholder="Enter Pokemon Name..." className='input-group-text m-4 form-control' onChange={(e) => {
            setSearchVal(e.target.value)
          }}></input>

          <button className='btn btn-warning mr-4' onClick={() => { pokeClick() }}>Search</button>
        </div>

        {showInfo && <PokemonInfo pokemonInfo={
          {
            "name": pokemonName,
            "height": pokemonHeight,
            "gameIndex": pokemonGameIndex,
            "imgUrl": pokemonImgUrl,
            "baseStats":pokemonBaseStats
          }}></PokemonInfo>}
      </div>

    </>
  )
}


export default App
