import { useState, useEffect } from "react";
import Card from "../component/Card";
import axios from "axios";

const Brazier = () => {
  const [brazierData, setBrazierData] = useState([]);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/sungchunp/camping.json/main/data.json")
      .then((response) => {
        const brazierItems = response.data.filter((item) => item.category === "brazier");
        setBrazierData(brazierItems);
      })
  }, []);

  const [viewProduct, setViewProduct] = useState();
  let viewCamping = brazierData.slice(0, viewProduct);

  return (
    <>
      <div className="container text-center">
        <div className="row row-cols-3">
          {viewCamping.map((data, i) => (
            <div className="col" key={i}>
              <Card data={data} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Brazier;
