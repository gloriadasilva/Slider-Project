import React, {useState, useEffect} from "react";
import Data from "./Data.js";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const Slide = ()=>{
    const [people, setPeople] = useState(Data);
    const [index, setIindex] = useState(0);
    // console.log(people)
    const nextBtn = ()=>{
      setIindex((oldIndex)=>{
        let index =  oldIndex + 1;
        if(index > Data.length -1){
          index = 0;
        }
        return index;
      })
      
    }
    const prevBtn = ()=>{
      setIindex((prevIndex)=>{
        let index = prevIndex - 1;
        
        if(index < 0){
          return Data.length -1;
        }
        return index;
      })
    }
    
    useEffect(()=>{
     let slide = setInterval(() => {
        setIindex((index)=>{
          let newIndex = index + 1;
          if(newIndex > Data.length - 1){
            newIndex = 0;
          }
          return newIndex;
        })
        
      }, 10000);
      return()=>{
        clearInterval(slide)
      }
    }, [index])
    
    
    return(
        <div className="parent">
          {
            people.map((items, itemIndex)=>{
              const {id, img, name, job, quote} = items;
              
              let position = "next";
              
              if (itemIndex === index){
                position ="active"
              }
              if (itemIndex === index -1){
                position = "left"
              }
              return <section key={id} className={position}>
                <div className="parent-text">
                <img src={img} alt="" className="image"/>
                <div className="text">
                   <div className="name">{name}</div>
                  <div>{job}</div>
                  <div className="quot">{quote}</div>
                  <FaQuoteRight className="icon" />
                </div>
                
                </div>
              </section>
            })
          }
          <button className="left" onClick={prevBtn}>
            <FaChevronLeft />
          </button>
          <button onClick={nextBtn}>
            <FaChevronRight  className="right"/>
          </button>
        </div>
    )
} 

export default Slide;