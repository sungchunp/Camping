import { useEffect, useState } from "react";
import Card from "../component/Card";
import axios from "axios";

const Segoods = () => {
  const [segoodsData, setSegooodsData] = useState([]);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/sungchunp/camping.json/main/data.json")
      .then((response) => {
        const segoodsItems = response.data.filter((item) => item.category === "segoods");
        setSegooodsData(segoodsItems);
      })
  }, []);

  const [viewProduct, setViewProduct] = useState();
  let viewCamping = segoodsData.slice(0, viewProduct);

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

export default Segoods;
