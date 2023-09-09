| No  | Subject                                                                                     |
| --- | ------------------------------------------------------------------------------------------- |
| 1.  | [Create react app with typescript with vite](#Create-react-app-with-typescript-with-vite)   |
| 1.  | [Event props - onClick](#onClick)                                                           |
| 1.  | [Event - How to use onClick event without passing props?](#onClick-without-passing-props)   |
| 1.  | [Event props - onChange](#onChange)                                                         |
| 1.  | [Event - How to use onChange event without passing props?](#onChange-without-passing-props) |
| 1.  | [Style props](#style-props)                                                                 |

### Create react app with typescript with vite

---

```js
npm init vite@latest
```

<a name='onClick'></a>

### Event props - onClick

---

_**Pass simple onClick Props:**_

```js
//App.tsx
<Button handleClick={() => console.log("Button Clicked!")} />;

//Button.tsx
type ButtonProps = {
  handleClick: () => void,
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click Me</button>
    </div>
  );
};

export default Button;
```

_**Pass event and data:**_

```tsx
//App.tsx
<Button
  handleClick={(event, id) => console.log("Button Clicked!", event, id)}
/>;

//Button.tsx
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1002)}>
        Click Me
      </button>
    </div>
  );
};

export default Button;
```

<a name='onClick-without-passing-props'></a>

## How to use onClick event without passing props?

---

```js
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
```

<a name='onChange'></a>

### Event props - onChange

---

```tsx
//App.tsx
<Input value="" handleChange={(event) => console.log(event.target.value)} />;

//Input.tsx
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
};

export default Input;
```

<a name='onChange-without-passing-props'></a>

## How to use onChange event without passing props?

---

```js
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
```

## Style props

---

```tsx
//App.tsx
<Container styles={{ color: "red" }} />;

//Container.tsx
type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Container</div>;
};

export default Container;
```

///////

# Built-in types props type

//string, number, boolean, null, undefine

## App.tsx

```ts
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <User name="Anamul" age={34} isRegistered={true} />
    </div>
  );
}

export default App;
```

## User.tsx

```ts
import React from "react";

const User = (props: { name: string; age: number; isRegistered: boolean }) => {
  return (
    <div>
      <p>
        I am {props.name}. I am {props.age} years old and I am{" "}
        {props.isRegistered ? "Registerd" : "not registered"} Person
      </p>
    </div>
  );
};

export default User;

//By variable
import { type } from "os";
import React from "react";

type UserProps = { name: string; age: number; isRegistered: boolean };

const User = (props: UserProps) => {
  return (
    <div>
      <p>
        I am {props.name}. I am {props.age} years old and I am{" "}
        {props.isRegistered ? "Registerd" : "not registered"} Person
      </p>
    </div>
  );
};

export default User;

// By destructuring
import React from "react";

type UserProps = { name: string; age: number; isRegistered: boolean };

const User = ({ name, age, isRegistered }: UserProps) => {
  return (
    <div>
      <p>
        I am {name}. I am {age} years old and I am{" "}
        {isRegistered ? "Registerd" : "not registered"} Person
      </p>
    </div>
  );
};

export default User;
```

# Array type props

## App.tsx

```ts
import React from "react";
import "./App.css";
import User from "./components/User";

//let lang = ["Bangla", "English"]

function App() {
  return (
    <div className="App">
      <User lang={["Bangla", "English"]} />
    </div>
  );
}

export default App;
```

## User.tsx

```ts
import React from "react";

type UserProps = { lang: string[] };

const User = ({ lang }: UserProps) => {
  return (
    <div>
      {lang.map((language, index) => {
        return <p key={index}>{language}</p>;
      })}
    </div>
  );
};

export default User;
```

# Object type props

## App.tsx

```js
import React from "react";
import "./App.css";
import User from "./components/User";

let user1 = { name: "Anamul", age: 34, isRegistered: true };

function App() {
  return (
    <div className="App">
      <User user={user1} />
    </div>
  );
}

export default App;
```

## User.tsx

```ts
import React from "react";

type UserProps = {
  user: {
    name: string;
    age: number;
    isRegistered: boolean;
  };
};

const User = ({ user }: UserProps) => {
  return (
    <div>
      <p> {user.name}</p>
      <p> {user.age}</p>
      <p> {user.isRegistered ? "Registered" : "Not Registered"}</p>
    </div>
  );
};

export default User;
```

# Array object type props

## App.tsx

```ts
import React from "react";
import "./App.css";
import User from "./components/User";

let users = [
  { name: "Anamul", age: 34, isRegistered: true },
  { name: "Mamun", age: 35, isRegistered: false },
];

function App() {
  return (
    <div className="App">
      <User user={users} />
    </div>
  );
}

export default App;
```

## User.tsx

```ts
import React from "react";

type UserProps = {
  user: {
    name: string;
    age: number;
    isRegistered: boolean;
  }[];
};

const User = ({ user }: UserProps) => {
  return (
    <div>
      {user.map((user, index) => {
        const { name, age, isRegistered } = user;
        return (
          <div key={index}>
            <p>{name}</p>
            <p>{age}</p>
            <p>{isRegistered ? "Registered" : "Not Registered"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
```

# union types props

## App.tsx

```js
import React from "react";
import "./App.css";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <User status={"success"} />
    </div>
  );
}
export default App;
```

## User.tsx

```ts
import React from "react";

type UserProps = {
  status: "success" | "error" | "loading";
};

const User = ({ status }: UserProps) => {
  if (status === "error") {
    return <p>Error!</p>;
  } else if (status === "loading") {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <p>Successful!</p>
    </div>
  );
};

export default User;
```

# Children props type

> **_ReactNode_**
> In the context of React, a ReactNode is a type that represents any possible React element, such as a JSX element, a string, or a number. It can be used as a type for a variable or a property in a component, to indicate that it can contain any type of element that can be rendered by React. It is an alias for the React.ReactNode type.

## Parents.tsx

```ts
import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
```

## Children.tsx

```ts
import React from "react";

const Button = (props: { children: React.ReactNode }) => {
  return <button>{props.children}</button>;
};

export default Button;
```

# style props

## App.tsx

```ts
import React from "react";
import "./App.css";
import Button from "./components/Button";

const btnStyle = {
  backgroundColor: "blue",
  color: "white",
};

function App() {
  return (
    <div className="App">
      <Button buttonStyle={btnStyle} />
    </div>
  );
}

export default App;
```

## Button.tsx

```ts
import React from "react";

type btnStyleProps = {
  buttonStyle: React.CSSProperties;
};

const Button = (props: btnStyleProps) => {
  return <button style={props.buttonStyle}>Click Me</button>;
};

export default Button;
```
