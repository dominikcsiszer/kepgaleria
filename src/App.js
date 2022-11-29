import './App.css';

import Kep from './Kep'
import {useState} from 'react'

const kepek = [
  {
    id: 1,
    cim: "Első kép",
    szerzo: "Ismeretlen",
    leiras: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    kep: "https://images.pexels.com/photos/11720281/pexels-photo-11720281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    cim: "Második kép",
    szerzo: "Ismeretlen",
    leiras: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    kep: "https://images.pexels.com/photos/14226004/pexels-photo-14226004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    cim: "Harmadk kép",
    szerzo: "Ismeretlen",
    leiras: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    kep: "https://images.pexels.com/photos/14099198/pexels-photo-14099198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    cim: "Negyedik kép",
    szerzo: "Ismeretlen",
    leiras: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    kep: "https://images.pexels.com/photos/11578601/pexels-photo-11578601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    cim: "Ötödik kép",
    szerzo: "Ismeretlen",
    leiras: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    kep: "https://images.pexels.com/photos/12754702/pexels-photo-12754702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]

function App() {

  function kattintasKepre(adat) {
    console.log(adat)
  }

  const [kep, setKep] = useState(kepek[0])
  const [index, setindex] = useState(0)

  function kattintasBalra() {
    if(index > 0) {
      setindex(index-1)
      console.log(index)
      setKep(kepek[index])
    }
  }

  function kattintasJobbra() {
    if(index < kepek.length-1) {
      setindex(index+1)
      console.log(index)
      setKep(kepek[index])
    }
  }

  return (
    <div className="App">
        <header className='app-header'>
            <h2>Képgaléria</h2>
        </header>
        <article className='kepek'>
        <i class="fa-solid fa-arrow-left" onClick={kattintasBalra}></i>
            <Kep kepAdat={kep} kattintasKepre={kattintasKepre}></Kep>
          <i class="fa-solid fa-arrow-right" onClick={kattintasJobbra}></i>
        </article>
        <footer>
            Csiszi
        </footer>
    </div>
  );
}

export default App;
