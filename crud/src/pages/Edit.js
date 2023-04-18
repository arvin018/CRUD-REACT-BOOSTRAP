import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { useParams } from "react-router-dom";
import { fetchPokemonId } from "../store/actions/action";
import { editPokemon } from "../store/actions/action";

export default function Add() {
  const dispatch = useDispatch();
  const [addForm, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  
  const { id } = useParams();
  // console.log(id,"tanda id");
 
  const  {pokemonId}  = useSelector((state) => state);
  // console.log(pokemonId,"tanda pokemon by Id");
 
  useEffect(() => {
    dispatch(fetchPokemonId(id));
  }, []);

  useEffect(() => {
   
    setForm({
        firstName: pokemonId.firstName,
      lastName: pokemonId.lastName,
      email: pokemonId.email,
    });
  }, [pokemonId]);
  

  const navigate = useNavigate();
  const handlerIput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    let formInput = {
      ...addForm,
    };
    formInput[key] = value;

    setForm(formInput);
  };
  const isFormIncomplete = addForm.firstName === "" || addForm.lastName === ""|| addForm.email=== "" ;

  const handlerSumbit = (e) => {
    e.preventDefault();
    if (addForm.firstName === "") {
      toast.warn("First Name is required");
    } else if (addForm.lastName === "") {
      toast.warn("Last Name is required");
    } else if (addForm.email === "") {
      toast.warn("Email is required");
    } else {
      
        
      dispatch(editPokemon(addForm));
      toast.success(`Success Edit Users ${addForm.email}`, {
        position: toast.POSITION.TOP_RIGHT
      });
      navigate(`/users/edit/${id}`);
    }
  };
  return (
    <div >
      <Form onSubmit={handlerSumbit}>
        <h1>Edit  User</h1>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handlerIput}
            value = {addForm.firstName} 
            />
        </Form.Group>

        

        <Form.Group className="mb-3">
          <Form.Label> Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handlerIput}
            value = {addForm.lastName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            onChange={handlerIput}
            value = {addForm.email}
          />
        </Form.Group>

    

        <Button variant="primary" type="submit" disabled={isFormIncomplete}>
          Submit
        </Button>
      </Form>

      <ToastContainer />
    </div>
  );
}
