import { useEffect, useState } from "react";
export const PookieApi = () => {
  const [pokimon, setPokimon] = useState(null);
  const [error, setError] = useState(null);

  // this api have not array this is a object of pikachu
  const Api = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // const pokieApi = () => {
  //   fetch(Api)
  //     .then((val) => val.json())
  //     .then((data) => {
  //       setPokimon(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setError(err); // Correct usage
  //     });
  // };

  // use async await

  const pokieApi = async () => {
    try {
      const val = await fetch(Api);
      const data = await val.json();
      setPokimon(data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    pokieApi();
  }, []);

  // first time hame api ka data null milega
  console.log(pokimon);
  // how we tackel

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  if (pokimon) {
    return (
      <>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg ">
          <header className="text-2xl font-bold text-center mb-4 text-indigo-700">
            Let's Catch Pokémon
          </header>
          <ul className="space-y-4">
            <li className="bg-gray-100 p-4 rounded-xl shadow-sm text-center text-gray-800 font-medium">
              <img
                className="mx-auto w-32 h-32 object-contain"
                src={pokimon.sprites.other.dream_world.front_default}
                alt={pokimon.name}
              />
              <p className="font-bold text-2xl mt-5 capitalize">
                {pokimon.name}
              </p>

              <img
                className="mx-auto w-32 h-32 object-contain"
                src={pokimon.sprites.other.showdown.front_female}
                alt={pokimon.name}
              />

              <img
                className="mx-auto w-32 h-32 object-contain"
                src={
                  pokimon.sprites.versions["generation-i"]["red-blue"]
                    .back_default
                }
                alt={pokimon.name}
              />
            </li>
          </ul>
        </div>
      </>
    );
  }
};
