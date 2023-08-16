import { useNavigate } from "react-router-dom";


const Card = ({ campingData }) => {
  const navigate = useNavigate();

  return (
    <div className="cam-3" onClick={() => {
      navigate('/detail/' + campingData.id);
      }} style={{cursor : 'pointer'}}>
      <img src={`https://raw.githubusercontent.com/sungchunp/image/main/${campingData.title}.jpg`} style={{ width: '100%' }} alt={campingData.title} />
      <h4>{campingData.title}</h4>
      <p>{campingData.price}</p>
    </div>
  );
}

export default Card;