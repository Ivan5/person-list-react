import React from "react";

import "./App.css";

const App = () => <PersonList />;

const PersonList = () => <Person />;

const Person = props => {
  const url = "https://randomuser.me/api/portraits/thumb/lego/1.jpg";
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>Name</h4>
        <h4>Job</h4>
      </div>
    </div>
  );
};

export default App;
