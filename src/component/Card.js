import { useNavigate } from "react-router-dom";


const Card = ({ data }) => {
  const navigate = useNavigate();
  

  return (
    <div className="cam-3" onClick={() => {
      navigate('/detail/' + data.id);
      }}>
      <img src={`https://raw.githubusercontent.com/sungchunp/image/main/${data.title}.jpg`}
      style={{ width: '50%' }} alt="product" />
      <h4>{data.title}</h4>
      <p>{data.price + '원'}</p>
    </div>
  );
}

export default Card;