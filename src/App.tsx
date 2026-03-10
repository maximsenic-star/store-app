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
import Greeting from "./components/Greeting/Greeting";
import Hero from "./components/Hero/Hero";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Tool from "./components/Tool/Tool";

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Greeting name="John"/>
      <Greeting name="Bob"/>
      <Greeting name="Ioann" age={20}/>
      <Tool/>
      <ProfileCard avatar={
        "https://m.media-amazon.com/images/S/pv-target-images/48448d3f65992c3c9da909933f7fa659efe20d88becd4b62459bc62e0da1889a.jpg"} 
        name={"Blue Alien"} 
        description={"Native Pandora citizen"}
        />
      <Hero />
    </>
  );
}

export default App;

// Hero - внутри section 
// Buy our unique product!

// SPA single page application