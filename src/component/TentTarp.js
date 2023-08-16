import Card from "./Card";

const TentTarp = ({ camping }) => {
  const [viewProduct, setviewProduct] = useState(9);
  let viewCamping = camping.slice(0, viewProduct);

  return (
    <>
      <div className="container">
        <div className="row" >
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