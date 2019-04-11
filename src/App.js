import React from "react";

import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 9,
      name: "John",
      job: "Developer"
    },
    {
      img: 7,
      name: "Sussy",
      job: "Designer"
    },
    {
      img: 3,
      name: "Germano",
      job: "Tecnical Support"
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]} />
      <Person person={people[2]} />
    </section>
  );
};

const Person = props => {
  const { img, name, job, children } = props.person;
  const url = `https://randomuser.me/api/portraits/thumb/lego/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
      </div>
    </div>
  );
};

export default App;
