import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./PlantPage.css";
import { useNavigate } from "react-router-dom";
const PlantPage = () => {
    //fetching data

    const navigate = useNavigate();
    const [currentPlant, setCurrentPlant]=useState({});
    // eslint-disable-next-line no-unused-vars
    let { id } = useParams();
    useEffect(() => {
        const fetchPlants = async () => {
            
                const response = await fetch(`/plants/${id}`);
                const json = await response.json();
                if(response.ok){
                    setCurrentPlant(json);
                }
            }
        fetchPlants();
    },[]);
    return (
        <div className="home">
           <span style={{color:"white",position:"fixed",left:"20px",fontSize:"25px",padding:"10px",zIndex:"1"}} onClick={() => navigate("/")}>Parks</span>
            <img className='picture' src={currentPlant.img}/>
            <>{currentPlant.name}</>
        </div>
    )
}

export default PlantPage;