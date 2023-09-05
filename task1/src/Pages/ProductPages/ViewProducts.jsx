import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../../Components/Data/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { debouncingGetProduct, deleteProduct, getAllProductlength, getProduct } from "../../Redux/Products/Product.action";
import Pagination from "../../Components/FilterAndPagination/Pagination";
import { Container } from "react-bootstrap";
import Limitation from "../../Components/FilterAndPagination/Limitation";
import Filtering from "../../Components/FilterAndPagination/Filtering";
import { useNavigate } from "react-router-dom";
import ProductLoader from "../../Components/Loader/ProductLoader";
import SearchBox from "../../Components/Search/SearchBox";
import SearchResult from "../../Components/Search/SearchResult";

const ViewProducts = () => {
  const [skeleton,setSkelton]=useState(true)
  const { AllProductData,AllProductsLength,AllDebounceProducts } = useSelector((store) => store.product);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [search, setSearch] = useState("");
  const [filterVal, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [order, setOrder] = useState("asc");
  const [totalPages,setTotalPages] = useState(Math.ceil(AllProductsLength.length / limit));
  const navigate=useNavigate()
  // console.log("totak",totalPages,AllProductsLength.length)
  const dispatch = useDispatch();
  
  // for debouncing
  const [searchQue,setSearchQue]=useState("")
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  

  const handleDelete = (id) => {
    if (window.confirm("Are you sure that you want to Delete that Product?")) {
      dispatch(deleteProduct(id,page, limit, search,sortBy,order));
    }
  };

  const debounceFunction=(val)=>{
    if(val){
      dispatch(debouncingGetProduct(val))
    }
  }

  useEffect(() => {
    dispatch(getAllProductlength()) 
    dispatch(getProduct(page, limit, search,sortBy,order));
    setTotalPages(Math.ceil(AllProductsLength.length / limit))
    
    // for loader and skeleton
    setTimeout(() => {
      setSkelton(false)
    }, 500);

    // for debouncing
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // return () => {
    //   document.removeEventListener('mousedown', handleClickOutside);
    // };
  }, [AllProductData.length, page, limit, search,sortBy,order]);

  // console.log(limit, search);
  return (
    <div className="bg-light">
      <div className="container text-centre p-4">
        <div className="container ">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 p-2">
              <Filtering setSearch={setSearch} setFilter={setFilter} setOrder={setOrder}/>

              {/* Debouncing */}
              <div class="w-50 p-3"  ref={searchRef}>
                  {/* <SearchBox setSearchQue={setSearchQue} debounceFunction={debounceFunction} setShowResults={setShowResults}/> */}
                  <div >
                      <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="Search Here..." value={searchQue} onChange={(e) => {
                            setSearchQue(e.target.value)
                            debounceFunction(e.target.value)
                          }}
                           onFocus={()=>setShowResults(true)}
                            />
                          <button onClick={()=>setSearchQue("")}  onFocus={()=>setShowResults(false)} class="btn btn-danger">
                          <i class="fa-sharp fa-solid fa-x"></i>
                          </button>
                      </div>
                  </div>
                  {
                    showResults && <SearchResult AllDebounceProducts={AllDebounceProducts}/>
                  }
              </div>
              
            </div>
          </div>
        </div>
        <div className="row">
          {
          AllProductData && AllProductData?.filter((e) => {
            return e.title.toLowerCase().includes(filterVal);
          }).map((item) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3 my-3 ">
                {
                  skeleton?<ProductLoader/>
                  :
                  <>
                    <ProductCard {...item} handleDelete={handleDelete} />
                  </>
                }
              </div>
            );
          })}
        </div>

        <div className="container ">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3 col-md-2 p-1">
              <Limitation setLimit={setLimit} />
            </div>
            <div className="col-lg-6 col-md-4 p-1">
              <Pagination page={page} totalPages={totalPages} setPage={setPage} />
            </div>
            <div className="col-lg-2 col-md-4 p-1">
              {/* <Pagination page={page} totalPages={totalPages} setPage={setPage} /> */}
              <button className="btn btn-success"onClick={()=>navigate('/addProduct')}>Add Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
