import React from 'react'

export const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className='center'>
      <img src={imageUrl} alt='face' />
    </div>
  )
}
export default FaceRecognition
