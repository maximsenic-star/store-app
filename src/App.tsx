// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import "./App.css";
import Book from "./components/Book";
import { Counter } from "./components/Counter/Counter";
import GoldPriceCalculator from "./components/GoldPriceCalculator";
import Greeting from "./components/Greeting/Greeting";
import Hero from "./components/Hero/Hero";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Tool from "./components/Tool/Tool";

const bookProps = {
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/5/51/1984_first_edition_cover.jpg",
  author: "George Orwell",
  year: 1948,
  title: "1984",
};

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Tool />
      <Greeting name="John" />
      <Greeting name="Bob" />
      <Greeting name="Ioann" age={20} />
      <Hero />
      <Counter />
      
      <GoldPriceCalculator />

      <Book {...bookProps} />

      <ProfileCard
        avatar={
          "https://m.media-amazon.com/images/S/pv-target-images/48448d3f65992c3c9da909933f7fa659efe20d88becd4b62459bc62e0da1889a.jpg"
        }
        name={"Blue Alien"}
        description={"Native Pandora citizen"}
      />
    </>
  );
}

export default App;

// Hero - внутри section
// Buy our unique product!

// SPA single page application
