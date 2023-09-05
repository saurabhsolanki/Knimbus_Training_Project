import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getE_data } from '../../Redux/E-library/E_library.Action';
import BookLoader from '../../Components/Loader/BookLoader';
import Ecard from '../../Components/Data/Ecard';
import CardLoader from '../../Components/Loader/CardLoader';

const EDashboard = () => {
  const [spin, setspin] = useState(true)
  const [skeleton,setSkelton]=useState(true)
  const { AllData,loading } = useSelector((store) => store.eLibrary);
  const dispatch = useDispatch();
  const [search,setSearch]=useState("")
  const [cards,setCards]=useState([])
  const [ecard,setEcard]=useState([])


  const handleClick=(e)=>{
    // console.log("clicked",e.connectors)
    setCards(e.connectors)
    setEcard(e.connectors)
    setSearch("")
  }

  const searchData=(e)=>{
    let newData=cards?.filter((val)=>{
      if(e===""){
        return val
      }else if(val.displayName.toLowerCase().includes(e.toLowerCase())){
        return val
      }
    });
    setEcard(newData)
  }

  useEffect(()=>{
    dispatch(getE_data()).then((res)=>{
      if(res){
        setCards(res[0].connectors)
        setEcard(res[0].connectors)
      }
    })

    // for loader and spinner
    setTimeout(() => {
      setspin(false)
    }, 1500);
    setTimeout(() => {
      setSkelton(false)
    }, 3500);
  },[])

 

  // console.log("alldata",AllData[0].connectors)
  return (
    <div className="container">
      <div className="container mt-4">
        <h3>OCA</h3>
      </div>
      {/*  */}


        { 
        //if loading ture
        spin?<>
          <BookLoader/>
          </>
          :
          // else
          <>

          <div className="row justify-content-between align-items-center">
                  <div className="col-lg-6 ">
                      {
                        AllData?.map((e)=>(
                          <button onClick={()=>handleClick(e)} className='btn btn-secondary btn-sm'>{e.resource_category}</button>
                          ))
                        }
                  </div>

                  <div className="col-lg-6">
                    <form>
                      <div className="form-group">
                      <input type="email" class="form-control" value={search} placeholder="Search Here" onChange={(e)=>{
                        setSearch(e.target.value) 
                        searchData(e.target.value)
                        }}/>
                      </div>
                    </form>
                  </div>
            </div>


          <div className="row mt-5">
            {
              // cards?.filter((val)=>{
              //   if(val===""){
              //     return val
              //   }else if(val.displayName.toLowerCase().includes(search.toLowerCase())){
              //     return val
              //   }
              // })
              ecard?.map((e)=>(
                <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
                  {
                    skeleton?<>
                    <CardLoader/>
                    </>
                    :
                    <>
                    <Ecard raAuthLevel={e.raAuthLevel} displayName={e.displayName}/>
                    </>
                  }
                </div>
              ))
            }
          </div>
          </>
        }

      
    </div>
  )
}

export default EDashboard
