import React from 'react'
import './main.css'

export default function Search({send, changeName, name}) {
    return (
        <form onSubmit = {send}>
        <div className = 'head'>
            <img className='icon' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/>
            <input 
                    value = {name}
                    placeholder='enter name on github'
                    onChange = {(e)=>changeName(e.target.value)}
            />
            <button type="submit"><i class="fa fa-search"></i></button>
            </div>
        </form>
    )
}
