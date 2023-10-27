import React from 'react'
import './Box1.css'

const Box = ({pic, head1, head2, btn, p}) => {
  return (
    <div className='cardCon'>
      <div className="imags">
        <img src={pic}/>
      </div>
      <div className="textWrap">
        <h2>{head1} <br/>{head2}</h2>
        <a href="#">{btn}</a>
        <p>{p}</p>
      </div>
    </div>
  )
}

export default Box
