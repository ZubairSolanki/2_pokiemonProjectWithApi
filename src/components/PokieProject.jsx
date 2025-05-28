import { useEffect, useState } from "react"
import { PokieCard } from "./PokieCard";



export const PokiePrject=()=>{

const [pokimon,setPokiemon]=useState([])

// eror state
const [error,setError]=useState(null)
//loding sate
const [loading,setlodaing]=useState(true)

// for searchimg
const [search,setSearch]=useState("")


//const url="https://pokeapi.co/api/v2/pokemon/";

//here we add limit use in api

const url="https://pokeapi.co/api/v2/pokemon?limit=50";

const PokieApi=async()=>{
try {
    const api=await fetch(url)
    const data=await api.json()
   // console.log(data)

   // here our data is a object and inside is a result[] array have 20 o bject
   const detailPokie= data.results.map(async(crrele)=>{
       // console.log(crrele.url) // here we can get only url

       // now we can get all url with fetch method
       // and make our map method is async
       const res=await fetch(crrele.url) // here we can get url data 
       const data=await res.json()
       // here we can get all api data  of array
     //  console.log(data)

     return data
      })
    
      // very important here we get 20 promise in array cant get proper data
      
      //console.log(detailPokie)
      
      // so here we use Promise.all for get all data in promise cuse our 20 promose are fullfield
      // if any promise is not fullfiled or have no data so all are failed

      // here use await always with promise 
      // and we can write await cuse we are oin function of async

    const pokieData=await Promise.all(detailPokie)
    console.log(pokieData) // here our pokieData is array
    setPokiemon(pokieData)
    // when we find all data so here we false our loading state
    setlodaing(false)
} catch (error) {
    console.log(error,"data not found")
    setError(error)
    // error bhi ata hai tu loading sate false krni hai
     setlodaing(false)
}
    
}

useEffect(()=>{
 PokieApi()
},[])




 const searching=pokimon.filter((data)=>{
  //  console.log(data)
      return  data.name.toLowerCase().includes(search.toLocaleLowerCase())
    })

// error state here we use

if(error){
    return(
        <div>
            <h1>Error:{error.message}</h1>
        </div>
    )
}


if(loading){
    return(
        <div>
            <h1>Loading.....</h1>
        </div>
    )
}

     return (
  <>
    <h1 className="text-center text-2xl font-bold my-4">Let's Catch Your Pokiemon</h1>
    {/* for serach functionality */}
    <div className="flex justify-center my-6">
  <input
  type="text"
  placeholder="Search your Pokiemon..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="font-bold w-80 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
/>

</div>

    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {/* {pokimon.map((crele) => { */}
      {searching.map((crele) => {
        return (
          <PokieCard  key={crele.id} crele={crele} />
          
         
        );
      })}
    </ul>
  </>
);

}