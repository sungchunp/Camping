import { useState } from "react";
import Card from "./Card";
// import img from "../../public/img";

const TentTarp = ({ camping }) => {
  const [viewProduct, setViewProduct] = useState(9);
  let viewCamping = camping.slice(0, viewProduct);

  return (
    <>
    {/* <div className='main-bg'
      style={{ backgroundImage: 'url(' + img + ')' }}></div> */}
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

export default TentTarp;