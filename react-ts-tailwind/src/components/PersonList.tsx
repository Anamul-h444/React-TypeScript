type PersonListProps = {
  name: {
    firstName: string;
    lastName: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.name.map((name, index) => (
        <div key={index}>
          <h1>
            {name.firstName} {name.lastName}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
