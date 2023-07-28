import React, { useEffect, useState } from 'react'

const url='https://jsonplaceholder.typicode.com/photos'
export default function App() {
  const [photos,setPhotos]=useState(null)
  const [load,setLoad]=useState(true)
  const [error,setError]=useState(null)

  const useData= async(url)=>{
    try {
      const res= await fetch(url);
      const data=await res.json();
      setPhotos(data)
      setLoad(false)
      setError(null)
      console.log(photos)
    } catch (error) {
      setError(error)
      setLoad(false)
    }
  
  }
  useEffect(()=>{
    useData(url)
  },[url])

  return {photos,error,load}
}
