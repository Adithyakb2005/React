// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import New_class from "./component/New"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <h2>count  {count}</h2>
//         <button onClick={() => setCount((count) => count + 1)}>
//           +
//         </button>
//         <button onClick={() => count>0 && setCount((count) => count - 1)}>
//           -
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// function App() {
//   const data=[
//     {id:1,name:'akhil',age:20},
//     {id:2,name:'nikhil',age:21},
//     {id:3,name:'sunil',age:20}
//   ]

//   return (
//     <>
      
//       <h1>student Details</h1>
//       <table>
//         <thead>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Age</th>
//         </thead>
//         <tbody>
//           {data.map((element)=>(
//             <tr key={element.id}>
//               <td>{element.id}</td>
//               <td>{element.name}</td>
//               <td>{element.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   )
// }
// export default App

import Sample_class from "./component/Sample"
import New1_class from "./component/New"

function App(){
  return(
    <>
    <div>
      <Sample_class color='green'/>
      <New1_class/>
    </div>
    </>
  )
}
export default App
