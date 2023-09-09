import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Parents from "./components/Parents";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

const App = () => {
  const personName = {
    firstName: "Anamul",
    lastName: "Haque",
  };
  const personList = [
    { firstName: "Anamul", lastName: "Haque" },
    { firstName: "Ahsan", lastName: "Munna" },
  ];
  return (
    <div>
      <Greet name="Anamul" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList name={personList} />
      <Status status="error" />
      <Parents>
        <h1>I am Passing as children</h1>
      </Parents>
      {/* <Button
        handleClick={(event, id) => console.log("Button Clicked!", event, id)}
      /> */}

      <Input />
      <Container styles={{ color: "red" }} />
    </div>
  );
};

export default App;
