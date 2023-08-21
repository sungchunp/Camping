import { useState, useEffect } from "react";
import Card from "../component/Card";
import axios from "axios";

//카테고리 8개의 코드 -> 한개의 코드로 수정하기

const TentTarp = () => {
  const [tenttarpData, setTentTarpData] = useState([]);
  const [viewProduct] = useState();

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/sungchunp/camping.json/main/data.json")
      .then((response) => {
        const tenttarpItems = response.data.filter((item) => item.category === "tenttarp");
        setTentTarpData(tenttarpItems);
      })
  }, []);

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
