import React from 'react'
import { Link } from 'react-router-dom'

const SearchResult = ({AllDebounceProducts}) => {
  console.log("AllDebounceProducts",AllDebounceProducts)
  return (
    <div>
        <div className="list-group suggested-result" >
            {AllDebounceProducts?.map((item)=>(
                <li className="list-group-item list-group-item-action">
                    <Link className='text-decoration-none' to={`/products/${item.id}`}>{item.name}</Link>
                </li>
            ))}
        </div>
    </div>
  )
}

export default SearchResult
