import { useContext } from "react";

import { PeopleContext } from "../context/PeopleContext";

import { Person } from "./Person";

export const PeopleList = () => {
  const { searchedPeople } = useContext(PeopleContext);

  const thereArePerson = searchedPeople?.length > 0 ? true : false;

  return (
    (thereArePerson && (
      <table className="table">
        <thead>
          <tr>
            <th className="table-head">Avatar</th>
            <th className="table-head">ID</th>
            <th className="table-head">First name</th>
            <th className="table-head">Last name</th>
            <th className="table-head">Email</th>
            <th className="table-head">Company</th>
            <th className="table-head">Department</th>
            <th className="table-head">Start date</th>
          </tr>
        </thead>
        <tbody>
          {searchedPeople?.map((x, i) => (
            <Person key={x.id} person={x} index={i} />
          ))}
        </tbody>
      </table>
    )) || <h1>No people available.</h1>
  );
};
