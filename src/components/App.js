import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const title = "Mad Max";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
  const posterURL ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  return (
    <div className="App">
      <MovieCard title={title} posterSrc = {posterURL }genres={genresArr} />
    </div>
  );
}

export default App;
