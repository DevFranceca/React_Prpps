import React from 'react'
import './Parent.css'
import Header from './Header'
import Box1 from './Box1'

const Parent = () => {
    const arr = [
      {
        picture: "./src/images/bag1.jpeg",
        head1: "Free eBook: The Best Web",
        head2: "Designs of 2015-2016",
        btn: "Web Design",
        date: "09 September"
    },
    {
      picture: "./src/images/bag3.jpeg",
      head1: "On The Future of Web",
      head2: "Design Tools",
      btn: "Resources & Tools",
      date: "08 September"
    },
    {
      picture: "./src/images/bag2.jpeg",
      head1: "Improving UI Design",
      head2: "Through Better Typography",
      btn: "Free eBook",
      date: "03 September"
    },
    {
      picture: "./src/images/Rb.jpeg",
      head1: "Vote Now For August's Site",
      head2: "of the Month",
      btn: "Web Design",
      date: "01 September"
    },
    {
      picture: "./src/images/bag2.jpeg",
      head1: "Tech is the Future",
      head2: "Embrace a Moving World",
      btn: "Read More",
      date: "08 September"
    },
    {
      picture: "./src/images/LapArt.jpeg",
      head1: "Improving UI Design",
      head2: "Through Better Typography",
      btn: "Check Here",
      date: "15 September"
    },
    {
      picture: "./src/images/bag3.jpeg",
      head1: "Girl Power Unleashed",
      head2: "Through Tech in Tech",
      btn: "See More",
      date: "25 September"
    },
    {
      picture: "./src/images/bag1.jpeg",
      head1: "Vote Now For August's Site",
      head2: "of the Month",
      btn: "Web Design",
      date: "23 September"
    },
    ]
  return (
    <div className="mainContainer">
        <Header/>
        <div className="boxWrap">
        {
          arr.map((props)=>{
            return <Box1 pic={props.picture} head1={props.head1} head2={props.head2} btn={props.btn} p={props.date}/>
          })
        }
        </div>
    </div>
  )
}

export default Parent
