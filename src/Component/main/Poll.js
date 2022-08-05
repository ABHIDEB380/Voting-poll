import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "../style/Poll.css"


export default function Poll(props){


const [data , setData]= useState([]);
let [rank , setRank]= useState([]);
const [disable , setDisable]= useState(false);
let vote=0;

props.setShowHead(true)
props.fetchData(rank);
useEffect(()=>{
  const getData = async()=>{
    const  response = await fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
    const data = await response.json();
    setData(data)
  }
  getData();
},[])
const handleClick = (id) => {
    const newData = data.map((el)=>{
      if(
        el.id == id
        ){
          const updateItem ={
            ...el
          };
          return updateItem;
        }
    })
      rank.push(newData[id-1])
      vote=vote+1;
      if(vote==3){
        setDisable(true)
      }
}
  return(
    <>
    <div className="poll-main-text">Please vote on any 3 items and Submit or go to Rank Page</div>
    <div className="poll-main">
    {
      data.map((elem)=>{
        return (
          <div className="poll" key={elem.id}>
            <div>
              <img src={elem.image} alt="" />
            </div>
            <h3>
              {elem.dishName}
            </h3>
            <div className="description">
              {elem.description}
            </div>
            <button 
             value={elem.id} 
             className="vote-button" 
             onClick={(e)=>handleClick(e.target.value)} 
             disabled={disable}
            >
              vote
            </button>
          </div>
        )
      })
    }
    </div>
    <div>
        <Link to='/result'>
          <button className="submit-button">Submit</button>
        </Link>
      
    </div>
    </>
  )
}