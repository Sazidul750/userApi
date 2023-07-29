import React from 'react'
import UseFetch from './UseFetch'
import {v4 as uuidv4 } from 'uuid'
import style from './useFetch.module.css'

export default function DataFetch() {
    const {error,data,load}=UseFetch('https://jsonplaceholder.typicode.com/users/1/posts')
    
    const element=data&&data.map((item)=>{
      const {title,body,id,ueserId}=item
      const todoNew={item,id:uuidv4()}
      return <div className={style.main} key={todoNew.id} >
       <div  className={style.card}>
       <p>{title}</p>
        <p>{body}</p>
       </div>
      
      </div>
    })
  return (
    <>
     {error&&<p>{error.message}</p>}
      {load&&<p>Data Loading</p>}
      <div>
      {element}
     
    </div>
    </>
   
  )
}
