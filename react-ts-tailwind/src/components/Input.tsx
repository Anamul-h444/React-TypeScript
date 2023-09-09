// type InputProps = {
//   value: string;
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// };

const Input = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Input;
