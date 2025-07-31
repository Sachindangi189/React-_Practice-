import { useEffect, useState } from "react";

const Joke = () => {
 let URL = "https://official-joke-api.appspot.com/random_joke";

 const getNewJoke = async () => {
    let jokes = await fetch(URL);
   let newJokes =  await jokes.json();
   
   setCurJoke({setup : newJokes.setup, punchline: newJokes.punchline});
 }
  let [curJoke,setCurJoke] = useState({});

  useEffect ( () => {
   async function joker() {
   let jokes = await fetch(URL);
   let newJokes =  await jokes.json();
   setCurJoke({setup : newJokes.setup, punchline: newJokes.punchline});
  }
  joker();
},[])



  return (
    <div>
      <h1>Get Random Joke</h1>
      <h2>{curJoke.setup}</h2>
      <h2>{curJoke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  )
}


export default Joke;