export const PokieCard = ({ crele }) => {
 return (
  <li className="bg-gradient-to-br from-blue-100 to-purple-200 shadow-xl rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="overflow-hidden">
      <img
        src={crele.sprites.other.dream_world.front_default}
        alt={crele.name}
        className="mx-auto mb-4 w-40 h-40 object-contain drop-shadow-lg transition-transform duration-500 hover:scale-110"
      />
    </div>

    <h2 className="text-2xl font-extrabold capitalize text-gray-800 tracking-wider mb-2">
      {crele.name}
    </h2>

    <p className="text-sm font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-1 inline-block rounded-full shadow-md mb-4">
      {crele.types.map((crele) => crele.type.name).join(" , ")}
    </p>

    <div className="grid grid-cols-3 text-xs font-medium text-gray-700 gap-2 mt-2">
      <div className="bg-white/80 rounded-lg px-2 py-1 shadow-sm">
        <span className="block text-gray-500">Height</span>
        <span className="text-blue-800">{crele.height}</span>
      </div>
      <div className="bg-white/80 rounded-lg px-2 py-1 shadow-sm">
        <span className="block text-gray-500">Weight</span>
        <span className="text-blue-800">{crele.weight}</span>
      </div>
      <div className="bg-white/80 rounded-lg px-2 py-1 shadow-sm">
        <span className="block text-gray-500">Speed</span>
        <span className="text-blue-800">{crele.stats[4].base_stat}</span>
      </div>
    </div>
  </li>
);

};
