import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './NavBar'
import { albumsData } from '../assets/assets'
import AlbumItem from './albumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
   <>
    <NavBar/>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
            {albumsData.map((item,index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
    </div>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's the biggest hits</h1>
        <div className='flex overflow-auto'>
            {songsData.map((item,index)=>(<SongItem key={index} name={item.name } desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
    </div>
   </>
  )
}

export default DisplayHome