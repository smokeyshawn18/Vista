import { useState, useEffect } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import Logo from "./assets/logo.png";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

    fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [term]);

  return (
    <div className="mx-auto p-4 w-full-lg bg-[#fffacd]">
      <img className="w-15 h-14 mt-7 rounded-full mx-auto" src={Logo} alt="" />
      <h1 className="text-2xl font-bold text-gray-800 text-center mt-8 mb-2 ">
        <span className="text-4xl font-extrabold text-[#00303f]">Vista</span> -
        Smart Images, Thanks to PixaBay.
      </h1>

      <Search searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-4xl text-center mt-10">No Images found...</h1>
      )}

      {isLoading ? (
        <h1 className="text-4xl text-center mt-10">Loading....</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  mt-4">
          {" "}
          {/* Increased gap */}
          {images.map((image) => (
            <Card key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
