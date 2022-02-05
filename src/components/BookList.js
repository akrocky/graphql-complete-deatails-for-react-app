import { useQuery } from "@apollo/client";
import React, { useState } from 'react';
import { getBooksQuery } from "../queries/quries";
import BookDetails from "./BookDetails";
 

const BookList = () => {
    const [selected,setSelected]=useState(null)
  
    const data=useQuery(getBooksQuery)
 
   
 if (data.loading) {
     return <span>loading....</span>
 }
 else{
     return <div>
     <ul>
         {
             data?.data?.books?.map(
             b=> <li key={b.id} onClick={e=>setSelected(b.id)}>{b.name}</li>
             )
         }
     </ul>
     <BookDetails bookId={selected}/>
     </div>
 }
};

export default BookList;