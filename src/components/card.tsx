import React from 'react'

export const Card = (props) => {
  return (
    <div className='card h-[200px] w-[200px] '>
      <img src={props.image} className='w-full h-full'
      />
    </div>
  )
}
