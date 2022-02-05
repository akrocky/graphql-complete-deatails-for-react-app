import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import AddBookList from "./components/AddBookList";
import BookList from "./components/BookList";

//appollo client set up
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
 
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div  >
      <h3>AK Reading List</h3>
      <BookList/>
       <AddBookList/>
    </div>
    </ApolloProvider>
  );
}

export default App;
