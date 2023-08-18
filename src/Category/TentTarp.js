import { useState, useEffect } from "react";
import Card from "../component/Card";
import axios from "axios";

const TentTarp = () => {
  const [tenttarpData, setTentTarpData] = useState([]);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/sungchunp/camping.json/main/data.json")
      .then((response) => {
        const tenttarpItems = response.data.filter((item) => item.category === "tenttarp");
        setTentTarpData(tenttarpItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [viewProduct, setViewProduct] = useState();
  let viewCamping = tenttarpData.slice(0, viewProduct);

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

export default TentTarp;