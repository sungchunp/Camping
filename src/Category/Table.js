import { useState, useEffect } from "react";
import Card from "../component/Card";
import axios from "axios";

const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/sungchunp/camping.json/main/data.json")
      .then((response) => {
        const tableItems = response.data.filter((item) => item.category === "table");
        setTableData(tableItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [viewProduct, setViewProduct] = useState();
  let viewCamping = tableData.slice(0, viewProduct);

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

export default Table;