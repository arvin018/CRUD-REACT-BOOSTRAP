
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { deleteByIdPokemon } from "../store/actions/action";


function TableUser({listData}) {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const handlerDelete = (e) => {
        e.preventDefault();
   
          dispatch(deleteByIdPokemon(listData.id));
      };
   
    
      const handelerEdit = (e) => {
        e.preventDefault();
        navigate(`/users/edit/${listData.id}`);
      };
    useEffect(() => {}, []);
    
  return (
   
          
      <tbody>
        <tr>
          <td>{listData.id}</td>
          <td>{listData.firstName}</td>
          <td>{listData.lastName.charAt(0) + listData.lastName.slice(1).replace(/./g, "*")}</td>
          <td>{listData.email}</td>
          <td> <Button variant="warning m-2" onClick={handelerEdit}>
          {" "}
          Edit
        </Button></td>
          <td><Button variant="danger" onClick={handlerDelete}>
          {" "}
          Delete
        </Button></td>
        </tr>
      </tbody>
   
  );
}

export default TableUser;