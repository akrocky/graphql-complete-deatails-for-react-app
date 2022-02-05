import { useQuery } from "@apollo/client";
import React from 'react';
import { getBookQuery } from "../queries/quries";


const BookDetails = ({bookId}) => {
   const{ data}= useQuery(getBookQuery,{
       variables:{
           id:bookId
       }
   })
   
   if(data?.book){
    return(
        <div>
            <h2>{ data?.book.name }</h2>
            <p>{ data?.book.genre }</p>
            <p>{ data?.book.author.name }</p>
            <p>All books by this author:</p>
            <ul className="other-books">
                { data?.book.author.books.map(item => {
                    return <li key={item.id}>{ item.name }</li>
                })}
            </ul>
        </div>
    );
} else {
    return( <div>No book selected...</div> );
}
};

export default BookDetails;