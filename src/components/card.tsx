import React from 'react'

export const Card = (props: { image: string | undefined }) => {
  return (
    <div className='card md:h-[200px] md:w-[200px] w-full'>
      <img src={props.image} className='w-full h-full'
      />
    </div>
  )
}
