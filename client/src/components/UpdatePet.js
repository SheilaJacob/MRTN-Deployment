import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import {Link} from 'react-router-dom';

const UpdatePet = () => {

    const { id } =useParams ();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [skillTwo, setSkillTwo] =useState ("");
    const [skillThree, setSkillThree]= useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(response => {
                setName(response.data.name);
                setType(response.data.type);
                setDescription(response.data.description);
                setSkills(response.data.skills);
                setSkillTwo(response.data.skillTwo);
                setSkillThree(response.data.skillThree)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, [id])
    //black belt feature having validations
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${id}`, {
            name,
            type,
            description,
            skills,
            skillTwo, 
            skillThree
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
            <Link to={`/`} type="button"  class="btn btn-danger">Home</Link>
            <form onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col-sm">
                            <label>Pet Name</label>
                            <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} /> 
                            { errors.name ? 
                                <p className="text-danger">{errors.name.message}</p>
                            : null
                            }       
                        </div>
                        <div>
                            <label>Type</label>
                            <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                            { errors.type ? 
                                <p className="text-danger">{errors.type.message}</p>
                            : null
                            }
                        </div>
                        <div>
                            <label>Description</label>
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                            { errors.description ? 
                                <p className="text-danger">{errors.description.message}</p>
                            : null
                            }
                        </div>
                </div>
                <div class="col-sm">
                    <div>
                        <label>Skills</label>
                        <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
                        { errors.skills ? 
                            <p className="text-danger">{errors.skills.message}</p>
                        : null
                        }
                    </div>
                    <div>
                        <label>Skill 2:</label>
                        <input type="text" value={skillTwo} onChange={(e) => setSkillTwo(e.target.value)} />
                        { errors.skillTwo ? 
                            <p className="text-danger">{errors.skillTwo.message}</p>
                        : null
                        }
                    </div>
                    <div>
                        <label>Skill 3:</label>
                        <input type="text" value={skillThree} onChange={(e) => setSkillThree(e.target.value)} />
                        { errors.skillThree ? 
                            <p className="text-danger">{errors.skillThree.message}</p>
                        : null
                        }
                    </div>
                </div>
                <button class="btn btn-primary">Edit Pet</button>
            </form> 
        </div>
    )

};

export default UpdatePet