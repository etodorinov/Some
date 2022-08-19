//http://tests.chromeye.com/

import "./App.css";

import { PeopleProvider } from "./context/PeopleContext";

import { PeopleList } from "./components/PeopleList";
import { SearchInputAndCriteria } from "./components/SearchInputAndCriteria";

function App() {
  return (
    <PeopleProvider>
      <div className="App">
        <SearchInputAndCriteria />
        <PeopleList />
      </div>
    </PeopleProvider>
  );
}

export default App;
