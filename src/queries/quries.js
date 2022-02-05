import {
    gql
} from "@apollo/client";
const getAuthorsQuery= gql`
{
   authors{
        id
        name
        
    }
}

`
const getBooksQuery= gql`
{
    books{
        id
        name
        
    }
}

`
const addBookMutation=gql`
mutation addBook($name:String!,$genre:String!,$authorId:ID!){
    addBook(name:$name,genre:$genre,authorId:$authorId){
        name
        id
    }
}

`
const getBookQuery=gql`
query($id:ID){
    book(id:$id){
        id
        name
        author{
            id
            name
            age
            books{
                name
                id
            }
        }
    }
}
`
export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };

