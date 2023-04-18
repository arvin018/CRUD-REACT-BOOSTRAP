import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { postPokemon } from "../store/actions/action";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function Add() {
  const dispatch = useDispatch();
  const [addForm, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    });

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
      
      dispatch(postPokemon(addForm));
      toast.success(`Success Addd Users ${addForm.email}`, {
        position: toast.POSITION.TOP_RIGHT
      });
      navigate("/add");
    }
  };
  return (
    <div >
      <Form onSubmit={handlerSumbit}>
        <h1>Form Add User</h1>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handlerIput}
          />
        </Form.Group>

        

        <Form.Group className="mb-3">
          <Form.Label> Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={addForm.lastName.replace(/./g, "*")}
            onChange={handlerIput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            onChange={handlerIput}
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
