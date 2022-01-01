import React from 'react'

function Perk(props) {
    return (
        <div className='perk'>
            <img src={ props.image } alt="" />
            <h1 className='heading-one-small'>{ props.title }</h1>
            <p>{ props.description }</p>
        </div>
    )
}

export default Perk
