import React, { useEffect, useState } from 'react'
import { API } from './components/config'
import Output from './components/Output'
import Search from './components/Search'


export default function App() {
const [name, setName] = useState('')
const [info, setInfo] = useState()

const getUser = async (event) =>{
  event.preventDefault()
  let req = await fetch(API + 'filter.php?c=Cocktail')
  let resp = await req.json()
  console.log(resp)
  setInfo(resp)
  // setName("")
}

  return (
    <div>
     <Search
      name = {name}
      changeName ={setName}
      send ={getUser}
     />
     <Output
       data = {info}
     />
    </div>
  )
}
