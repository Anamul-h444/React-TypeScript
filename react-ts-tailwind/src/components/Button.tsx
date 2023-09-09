// type ButtonProps = {
//   handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
// };

const Button = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    console.log("Clicked!", event);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Button;
