import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CatList from "./CatList";
import { fetchCats } from "./catsSlice";

function Cats() {
  const catPics = useSelector((state) => state.cats.entities);
  //const isLoading = useSelector((state) => state.status === "idle");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  // console.log("🚀 ~ file: Cats.js ~ line 16 ~ Cats ~ isLoading", isLoading)
  // if (isLoading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>CatBook</h1>
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats;
