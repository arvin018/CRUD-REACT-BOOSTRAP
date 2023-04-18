import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { fetchPokemon } from "../store/actions/action";
import TableUser from "../components/TableUser";
export default function Home() {
  const dispatch = useDispatch();

  const { pokemon, isloading } = useSelector((state) => state);

  
  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  if (isloading) {
    return <div> ...Loading</div>;
  }
  return (
    <div>
    
      <h1> Home </h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      {pokemon.users?.map((listData) => {
        return (
            <TableUser key={listData.id} listData={listData} /> 
        )
      })}
      </Table>
         
        
    </div>
  );
}

