import './App.css'
import Header from './component/Header'
import PackingList from './component/PackingList'
import Profile from './component/Profile'
import ShoppingList from './component/ShoppingList'
import MyButton from './component/MyButton'
import StateButton from './component/StateButton'
import ButtonPlus from './component/ButtonPlus'

import { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0);

  function handleClick () {
      setCount(count + 1)
  }

  return (
    <>
    <Header person={{ name: "rafi", age: "19", live: "banten"}}></Header>
    <br />
    <PackingList></PackingList>
    <br />
    <Profile></Profile>
    <br />
    <ShoppingList></ShoppingList>
    <br />
    <MyButton></MyButton>
    <br />
    <StateButton></StateButton>
    <br />
    <ButtonPlus count={count} onClick={handleClick}></ButtonPlus>
    <ButtonPlus count={count} onClick={handleClick}></ButtonPlus>
    </>
    
  )
}

export default App
