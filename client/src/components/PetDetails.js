import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';


const PetDetails = () => {
    const {id} = useParams();
    const [pet, setPet] = useState({});
    // const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/pet/${id}`)
        .then((res) => {
            console.log(res.data);
            setPet(res.data);
        })
        .catch((err) => console.log('GET pet BY ID ERROR', err));
    }, [id]);
      //black belt feature like button
    const [like, setLike] = useState(0),
            [isLike, setIsLike] = useState(false),
        onLikeButtonClick = () => {
            setLike(like + (isLike?-1:1));
            setIsLike(!isLike);
            setIsLike.disabled = true;
        };  
    return (
        <div>
            <div>
                <Link to={`/`} type="button" className="btn btn-success">Home</Link>
            </div>
            <h2>Details about:  {pet.name}</h2>
            <p> Type:  {pet.type} </p>
            <p> Description: {pet.description}</p>
            <p> Skill 1: {pet.skills}</p>
            <p> skill 2: {pet.skillTwo}</p>
            <p> skill 3: {pet.skillThree}</p>
            <button className={"btn btn-success " + (isLike ? "liked" : "")}
                    onClick={onLikeButtonClick} disabled={like}>
                    {"Like"} {pet.name} 
            </button> {like} Like(s)
        </div>
    );


};

export default PetDetails;