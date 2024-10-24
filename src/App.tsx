import { useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";

function App() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<FormControlElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  };
  return (
    <>
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList />
    </>
  );
}

export default App;
