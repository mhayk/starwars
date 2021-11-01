import { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";

import { ReactQueryDevtools } from 'react-query/devtools'

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();


function App() {
  const [page, setPage] = useState("planets");

  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />

        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={true} />

    </QueryClientProvider>
  );
}

export default App;
