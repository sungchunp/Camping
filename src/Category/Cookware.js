import { useState } from "react";
import Card from "../component/Card";
import data from "../campingData";

const Cookware = ({ camping }) => {
  const [viewProduct, setViewProduct] = useState(10);
  let viewCamping = camping.slice(0, viewProduct);

  return (
    <>
      <div className="container">
        <div className="row">
          {
            viewCamping.map((data, i) => {
              return (
                <Card data={data} key={i} />
              );
            })
          }
        </div>
      </div >

    </>
  );
}

export default Cookware;
