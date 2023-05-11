import React from 'react'

const Data = () => {
    let arr = [];
    let n=9;
    for(let i=1;i<=n;i++){
        arr.push(i)
    }
  return (
    <div>{arr}</div>
  )
}

export default Data;