import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <div>
      {props.part} {props.exercise}
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      {
        props.parts.map((part, index) => (
          <Part key={index} part={part.name} exercise={part.exercises} />
        ))
        // Each child in a list should have a unique "key" prop.
      }
    </div>
  );
};

const Total = (props) => {
  return <div>Number of exercises {props.total}</div>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",

    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const totalExercises = course.parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      {/* <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} /> */}
      <Total total={totalExercises} />
    </div>
  );
};

export default App;
