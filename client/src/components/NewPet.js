import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const NewPet = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [skillTwo, setSkillTwo] =useState ("");
    const [skillThree, setSkillThree]= useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet', {
        name, 
        type, 
        description, 
        skills,skillTwo, skillThree
        })
        .then((res) => {
            console.log(res.data);
            navigate('/');
        })
        .catch(err=>{
            setErrors(err.response.data.errors);
            console.log("help", err.response.data)
        })
    };
    return (
        <div>
            <Link to={`/`}  class="d-flex justify-content-end"><button className="btn btn-success">Home</button></Link>
        <form onSubmit={handleSubmit}>
            <h3 className="text-info">
                Know a pet needing a home?
            </h3>
            <div class="row">
                <div class="col-sm">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName (e.target.value)}/>
                    
                    { errors.name ? 
                                <p className="text-danger">{errors.name.message}</p>
                        : null
                    }
                    <div>
                    <label>Type</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                    
                    { errors.type ? 
                                <p className="text-danger">{errors.type.message}</p>
                        : null
                    }
                    </div>
                    <label>description</label>
                    <input type="text" value={description} onChange={(e) =>setDescription (e.target.value)} />
                    { errors.description ? 
                                <p className="text-danger">{errors.description.message}</p>
                        : null
                    }
                </div>
                <div class="col-sm">
                    <h4>Skills (optional)</h4>
                    <label>Skills 1:</label>
                    <input type="text" value={skills} onChange={(e) => setSkills (e.target.value)} />
                    {errors.skills && <span className="text-danger">{errors.skills.message}</span>}
                    <div>
                    <label>Skills 2:</label>
                    <input type="text" value={skillTwo} onChange={(e) => setSkillTwo (e.target.value)} />
                    {errors.skillTwo && <span className="text-danger">{errors.skillTwo.message}</span>}
                    </div>
                    <label>Skills 3:</label>
                    <input type="text" value={skillThree} onChange={(e) => setSkillThree (e.target.value)} />
                    {errors.skillThree && <span className="text-danger">{errors.skillThree.message}</span>}
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Add Pet</button>
        </form>
    </div>
    );
};

export default NewPet;