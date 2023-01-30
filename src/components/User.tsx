import React from "react";

type UserProps = {
  status:"success"|"error"|"loading"
};

const User = ({ status }: UserProps) => {
    if(status==="error"){
        return <p>Error!</p>
    }else if(status==="loading"){
       return  <p>Loading....</p>
    }
  return (
    <div>
     <p>Successful!</p>
    </div>
  );
};

export default User;
