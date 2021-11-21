import React, { useEffect} from "react";

import "./index.css"

import { useDispatch, useSelector } from "react-redux";
import { fetchDataByPage, incrementByAmount } from "../../redux/dataSlice";

const ListingPage=()=>{
  
   
    const dispatch = useDispatch()
  
    const page = useSelector((state) => state.data.page)
    const contentItems = useSelector((state) => state.data.contentItems)
   
    const pageNumber= useSelector((state) => state.data.value)
    useEffect(() => {
      dispatch(fetchDataByPage(pageNumber))
    }, []);

    useEffect(() => {
     
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      
      }, []);
      useEffect(()=>{

       if(page&& contentItems.length<page['total-content-items']) dispatch(fetchDataByPage(pageNumber))
      },[pageNumber])
    
    
    const handleScroll=()=> {
        if (Math.ceil(window.innerHeight + document.documentElement.scrollTop) == document.documentElement.offsetHeight) {
        
      dispatch(incrementByAmount())
     }
      }
     
    return(
        <div>
            <div className="listing-container">
            {page&&contentItems.map((item)=><div><img src={`Slices/${item["poster-image"]}`} className="list-image"/><p className="list-title">{item.name}</p></div>)}
            </div>
        </div>
    )
}

export default ListingPage;