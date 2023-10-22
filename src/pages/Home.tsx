import React, { useState, useEffect } from 'react'
import { IPosts, PostsServices } from '../Services/Api/Posts'

export function Home() {

  const [posts, setPosts] = useState<IPosts[]>()

  const getData = () => {
    PostsServices().getAll().then((response) => {
      if (response.status !== 200 || !response.data.success) {
        throw new Error(response.data.message)
      } 

      setPosts(response.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }


  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      {posts?.map((data) => (
        <p>{data.title}</p>
      )) }
    </div>
  )
}
