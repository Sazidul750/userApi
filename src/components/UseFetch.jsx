import React, { useEffect, useState } from 'react'

export default function UseFetch(url) {
 const [data,setData]=useState(null)
 const [load,setLoad]=useState(true)
 const [error,setError]=useState(null)

 const useData=async(url)=>{
  setLoad(true)
  try {
    const res=await fetch(url);
    const data=await res.json()
    setData(data)
    setLoad(false)
    setError(null)
  
  } catch (error) {
    setError(error.message)
    setLoad(false)
  }
 

 }
 useEffect(()=>{
  useData(url)
 },[url])
 return {data,error,load}
}
