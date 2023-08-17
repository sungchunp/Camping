import { useNavigate } from "react-router-dom";
import data from "../campingData";


const Card = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="cam-3" onClick={() => {
      navigate('/detail/' + data.id);
      }}>
      <img src={`https://raw.githubusercontent.com/sungchunp/image/main/${data.title}.jpg`} //이건 또 왜 안나오지
      style={{ width: '50%' }} alt={data.title} />
      <h4>{data.title}</h4>
      <p>{data.price + '원'}</p>
    </div>
  );
}

export default Card;