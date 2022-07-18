import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom'; 

const DisplayList = () => {
    const [pets, setPets] = useState([]);
    
    useEffect(() => {
      axios
        .get('http://localhost:8000/api/pets')
        .then((res) => {
          console.log(res.data);
          setPets(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
//    delete
    const deletePet = (petId) => {
      axios
          .delete(`http://localhost:8000/api/pet/${petId}`)
          .then((res) => {
              const newPets = pets.filter((pet) => pet._id !== petId);
          setPets(newPets);
          })
          .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="col-8">
      <Link to={`/new`} type="button" className="btn btn-primary">Add a Pet to the shelter</Link>
        <h3>These pets are looking for a good home</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Available</th>
              <th scope="col">Type</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
            <tr key={pet._id} >
              <th scope="row">
                  {pet.name} 
              </th>
              <th scope="row">
                  {pet.type}
              </th>
              <td>
                <Link to={`/pet/${pet._id}`}><button className="btn btn-info">Details</button></Link>
                <Link to={`/pet/edit/${pet._id}`}><button className="btn btn-primary">Edit</button></Link>
                <button type="button" class="btn btn-danger" onClick={() => deletePet(pet._id)}>Adopt</button>
              </td>
            </tr>   
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
  
export default DisplayList;