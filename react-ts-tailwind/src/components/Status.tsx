type StatusProps = {
  status: "isLoading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "isLoading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fetch successful";
  } else if (props.status === "error") {
    message = "Error occoured!";
  }
  return <div>{message}</div>;
};

export default Status;
