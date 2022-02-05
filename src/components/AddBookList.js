import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { addBookMutation, getAuthorsQuery, getBooksQuery } from "../queries/quries";

 

const AddBookList = () => {
    const [name,setName]= useState('')
   const [genre,setGenre]= useState('')
   const [authorId,setAuthorId]= useState('')
    const {data,loading}=useQuery(getAuthorsQuery)
    const [addBook,doc]=useMutation(addBookMutation,{
        variables:{
         name:name,
         genre:genre,
          authorId:authorId  
        },
        refetchQueries:[{query:getBooksQuery}]
    
      })

   
  
 
   const submitHandler=(e)=>{
    e.preventDefault()
    console.log(name,genre,authorId);
    addBook()
    }
  const displayAuthors=()=>{
    if (loading) {
        return <option>loadings authors ....</option> 
     }
     else{
         return data.authors.map(a=> <option key={a.id} value={a.id}>{a.name}</option>)
     }
  }
  
 return (
    <form id="add-book" onSubmit={submitHandler}>
    <div className="field">
        <label>Book name:</label>
        <input type="text"  onChange={e=> setName(e.target.value)}/>
    </div>
    <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={e=> setGenre(e.target.value)}/>
    </div>
    <div className="field">
        <label>Author:</label>
        <select onChange={e=> setAuthorId(e.target.value)}>
            <option>Select author</option>
            {
                displayAuthors()
            }
           
        </select>
    </div>
    <button type="submit">+</button>

</form>
 )
 
};

export default  AddBookList ;