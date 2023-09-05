import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Poc = () => {
  const[style,setStyle]=useState({})
  const [skeleton,setSkelton]=useState(true)

  const getStyle=()=>{
   return axios.get("http://localhost:8080/col_style").then((res)=>{
      // console.log(res.data)
      setStyle(res.data)
    })
  }

  const handleRefresh=()=>{
    getStyle()
  }

  useEffect(()=>{
    getStyle()
        // for loader and skeleton
        setTimeout(() => {
          setSkelton(false)
        }, 1000);
    
  },[])

  return (
    <div>
      {/* <div className="container text-center">

        <div className="row">
          <div className="col-3" style={{border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, iusto?
          </div>
          <div className="col-3" style={{border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, iusto?
          </div>
          <div className="col-3" style={{border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, iusto?
          </div>
          <div className="col-3" style={{border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, iusto?
          </div>
        </div>

        <div className="row">
          <div className="col-8" style={{border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorum.
          </div>
          <div className="col-4" style={{border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorum.
          </div>
        </div>

        <div className="row">
          <div className="col-6" style={{border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorum.
          </div>
          <div className="col-6" style={{border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorum.
          </div>
        </div>
        
      </div> */}

     

      {skeleton?
      <Loader/>
      :
      <>
       {/* this div is container which contain all the row and col */}
       <div style={{display:style.container_style.display_style, flexDirection:style.container_style.display_direction, border:"1px solid blue",padding:"20px", width:"90%", margin:"auto",gap:"10px"}}>

        {/* first row */}
        <div style={{display:style.row_style.row_display, flexWrap:style.row_style.row_flex_wrap, justifyContent:style.row_style.row_justify_content}}>
          {style.row1.columns.map((item,index)=>(
            <div style={{width:item.width, border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, vel.
            </div>
          ))}
        </div>

        {/* 2nd row */}
        <div >
          {style.row2.columns.map((item,index)=>(
            <div style={{width:item.width, border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, vel.
            </div>
          ))}
        </div>

        {/* 3rd row */}
        <div style={{display:style.row_style.row_display, flexWrap:style.row_style.row_flex_wrap, justifyContent:style.row_style.row_justify_content}}>
          {style.row3.columns.map((item,index)=>(
            <div style={{width:item.width, border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, vel.
            </div>
          ))}
        </div>
        </div>
      </>
      }

      {/* dynamic rows */}
      {skeleton?
      <Loader/>
      :
      <>
      {/* this div is container which contain all the Dynamic row and col*/}
      <div style={{display:style.container_style.display_style, flexDirection:style.container_style.display_direction, border:"1px solid blue",padding:"20px", width:"90%", margin:"auto",gap:"10px"}}>
          {
            style.rows.map((item)=>(
              <div style={{display:style.row_style.row_display, flexWrap:style.row_style.row_flex_wrap, justifyContent:style.row_style.row_justify_content}}>
                {
                  item.columns.map((el)=>(
                    <div style={{width:el.width, border:style.col_border_color, backgroundColor:style.col_background_color, color:style.col_text_color, textAlign:"center"}}>
                     {el.width}
                    </div>
                  ))
                }
              </div>
            ))
          }
        
      </div>
      </>
      }

        <div className="container pt-3">
            <button className="btn btn-success" onClick={()=>handleRefresh()}>Refresh</button>
        </div>
    </div>
  );
};

export default Poc;
