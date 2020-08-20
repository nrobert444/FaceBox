import React from 'react'

export const Rank = ({ name, entries }) => {
  return (
    <div>
      {`${name} , your current entry count is...`}
      <div className='white f3 '>{entries}</div>
    </div>
  )
}
export default Rank
