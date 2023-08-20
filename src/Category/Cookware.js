import { useEffect, useState } from "react";
import Card from "../component/Card";
import axios from "axios";

const Cookware = () => {
  const [cookwareData, setCookwareData] = useState([]);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/sungchunp/camping.json/main/data.json")
      .then((response) => {
        const cookwareItems = response.data.filter((item) => item.category === "cookware");
        setCookwareData(cookwareItems);
      })
  }, []);

  const [viewProduct, setViewProduct] = useState();
  let viewCamping = cookwareData.slice(0, viewProduct);

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

export default Cookware;
