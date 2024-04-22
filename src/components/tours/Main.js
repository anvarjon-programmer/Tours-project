import React, { useEffect, useState } from 'react'
import './Main.css'
import Loading from './Loading';
import Tours from './Tours';
import { request } from '../../utils/request';

// const url = "https://course-api.com/react-tours-project";

const Main = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
  
    const removeTour = id =>{
        const newTours = tours.filter(tour => tour.id !== id)
        setTours(newTours)
    }
  
    const fetchTours = async () => {
      setLoading(true);
      try {
        const {data} = await request('react-tours-project');
        setLoading(false);
        setTours(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    useEffect(() => {
      fetchTours();
    }, []);
    
    if (loading) {
      return (
        <main>
          <Loading />
        </main>
      );
    }
  return (
    <main>
       <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default Main