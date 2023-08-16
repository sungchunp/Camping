import { Container } from 'react-bootstrap';
import './Detail.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";

const Detail = ({ camping }) => {
  const { id } = useParams();
  const [alert, setAlert] = useState(true);
  const [tabNumber, setTabNumber] = useState(0);
  const dispatch = useDispatch();

  return ( 
    
      <div className='now'>

      </div>
    
  )
}