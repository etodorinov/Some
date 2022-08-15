import { useState, useEffect, createContext } from "react";

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [initialPeople, setInitialPeople] = useState();
  const [searchedPeople, setSearchedPeople] = useState();

  useEffect(() => {
    fetch("http://apis.chromeye.com:9191/people")
      .then((response) => response.json())
      .then((people) => {
        setInitialPeople(people);
      });
  }, []);

  return (
    <PeopleContext.Provider
      value={{ setSearchedPeople, initialPeople, searchedPeople }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
