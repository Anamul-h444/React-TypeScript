type GreetProps = {
  name: string;
  messageCount?: number; // ? = optional
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>
          Hi {props.name}! You have {messageCount} unread message.
        </h1>
      ) : (
        <h1>Welcome</h1>
      )}
    </div>
  );
};

export default Greet;
