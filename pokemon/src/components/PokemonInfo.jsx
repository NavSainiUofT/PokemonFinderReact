
function PokemonInfo({ pokemonInfo }) {
    return (
        <>
            <div className="container">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={pokemonInfo.imgUrl} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1)}</h5>
                </div>
                <ul className="list-group list-group-flush">

                    <li className="list-group-item">Type: </li>
                    <li className="list-group-item">Abilities: </li>
                    <li className="list-group-item">Pokedex Entry: {pokemonInfo.gameIndex}</li>
                    <li className="list-group-item">Height: {pokemonInfo.height} Feet</li>

                </ul>
            </div>
            </div>
            <div className="container-fluid">
                <h1>Base Stats:</h1>
                <div className="container mb-2">
                    <div className="progress mb-2" role="progressbar" aria-label="Success striped example">
                        <div className="progress-bar bg-success" style={{ width: String((pokemonInfo.baseStats.hp / 255) * 100) + "%" }}>
                            HP: {pokemonInfo.baseStats.hp}
                        </div>
                    </div>

                    <div className="progress mb-2" role="progressbar" aria-label="Info striped example">
                        <div className="progress-bar bg-info" style={{ width: String((pokemonInfo.baseStats.attack / 255) * 100) + "%" }}>
                            Attack: {pokemonInfo.baseStats.attack}
                        </div>
                    </div>

                    <div className="progress mb-2" role="progressbar" aria-label="Default striped example">
                        <div className="progress-bar " style={{ width: String((pokemonInfo.baseStats.defense / 255) * 100) + "%" }}>
                            Defense: {pokemonInfo.baseStats.defense}
                        </div>
                    </div>

                    <div className="progress mb-2" role="progressbar" aria-label="Warning striped example">
                        <div className="progress-bar bg-warning" style={{ width: String((pokemonInfo.baseStats.specialAttack / 255) * 100) + "%" }}>
                            Sp Attack: {pokemonInfo.baseStats.specialAttack}
                        </div>
                    </div>

                    <div className="progress mb-2" role="progressbar" aria-label="Danger striped example">
                        <div className="progress-bar bg-danger" style={{ width: String((pokemonInfo.baseStats.specialDefense / 255) * 100) + "%" }}>
                            Sp Defense: {pokemonInfo.baseStats.specialDefense}
                        </div>
                    </div>
                    <div className="progress mb-2" role="progressbar" aria-label="Danger striped example">
                        <div className="progress-bar bg-dark" style={{ width: String((pokemonInfo.baseStats.speed / 255) * 100) + "%" }}>
                            Speed: {pokemonInfo.baseStats.speed}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default PokemonInfo;