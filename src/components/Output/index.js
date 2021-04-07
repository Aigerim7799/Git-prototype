import React from 'react'
import './main.css'

export default function Output({data, }) {
    return (
        <div>
           {data ?
           <div className='container'>
           <div className = 'block'>
           <img className ='avatar' src={data.avatar_url}/>
           <h2>{data.name}</h2>
           <p>{data.bio}</p>
           <div className='follow'>
           <p> followers {data.followers}</p>
           <p>following {data.following}</p>
           </div>
           <p>location {data.location}</p>
           
           </div>
           <div className ='block2'>
               <p>Repositories {data.public_repos}</p>
           </div>

            </div>
           :<h3>EMPTY</h3>}
        </div>
    )
}
