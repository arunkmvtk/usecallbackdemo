import React from 'react'

 const Child = ({handleClick}) => {
    console.log("Child rendered!");
  return (
    <div>{handleClick()} </div>
  )
}
export default Child
export const MemoizedChild = React.memo(Child)