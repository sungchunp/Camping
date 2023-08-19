import { useEffect, useState } from "react";
import Card from "../component/Card";
import axios from "axios";

const Lamp = () => {
  const [lampData, setLampData] = useState([]);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/sungchunp/camping.json/main/data.json")
      .then((response) => {
        const lampItems = response.data.filter((item) => item.category === "lamp");
        setLampData(lampItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [viewProduct, setViewProduct] = useState();
  let viewCamping = lampData.slice(0, viewProduct);

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

export default Lamp;
