import { useState } from "react";
import "./App.css";
import Form from "./components/form";

const App = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    topic: "",
    language: "",
    YOE: "",
    excerciseFreq: "",
    diet: "",
    qualification: "",
    FOS: "",
    feedback: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9_ ]{3,16}$",
      required: true,
      val: "textInput",
      optionsValues: [],
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
      pattern: "^[a-z][a-z0-9_.]*@(gmail|yahoo).com$",
      val: "textInput",
      optionsValues: [],
    },
    {
      id: 3,
      name: "topic",
      type: "dropdown",
      placeholder: "Survey Topic",
      label: "Survey Topic",
      val: "checkbox",
      required: true,
      optionsValues: ["Technology", "Health", "Education"],
    },
    {
      id: 4,
      name: "language",
      type: "dropdown",
      placeholder: "Favorite Programming Language",
      label: "Favorite Programming Language",
      val: "checkbox",
      required: true,
      optionsValues: ["JavaScript", "Python", "Java", "C#"],
      onlyIf: "Technology",
    },
    {
      id: 5,
      name: "YOE",
      type: "number",
      placeholder: "Years of Experience",
      label: "Years of Experience",
      required: true,
      val: "textInput",
      optionsValues: [],
      errorMessage: "Age cannot be negative!",
      min: "0",
      onlyIf: "Technology",
    },

    {
      id: 6,
      name: "excerciseFreq",
      type: "dropdown",
      placeholder: "Exercise Frequency",
      label: "Exercise Frequency",
      val: "checkbox",
      required: true,
      optionsValues: ["Daily", "Weekly", "Monthly", "Rarely"],
      onlyIf: "Health",
    },
    {
      id: 7,
      name: "diet",
      type: "dropdown",
      placeholder: "Diet Preference",
      label: "Diet Preference",
      val: "checkbox",
      required: true,
      optionsValues: ["Vegetarian", "Vegan", "Non - Vegetarian"],
      onlyIf: "Health",
    },
    {
      id: 8,
      name: "qualification",
      type: "dropdown",
      placeholder: "Highest Qualification",
      label: "Highest Qualification",
      val: "checkbox",
      required: true,
      optionsValues: ["High School", "Bachelor's, Master's", "PhD"],
      onlyIf: "Education",
    },
    {
      id: 9,
      name: "FOS",
      type: "text",
      placeholder: "Field of Study",
      label: "Field of Study",
      required: true,
      val: "textInput",
      optionsValues: [],
      onlyIf: "Education",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({
      fullName: "",
      email: "",
      topic: "",
      language: "",
      YOE: "",
      excerciseFreq: "",
      diet: "",
      qualification: "",
      FOS: "",
      feedback: "",
    });
    document.querySelector("form").reset();
  };

  const onChange = (e) => {
    if (e.target.name === "language" || e.target.name === "YOE") {
      values.excerciseFreq = "";
      values.diet = "";
      values.qualification = "";
      values.FOS = "";
    } else if (e.target.name === "excerciseFreq" || e.target.name === "diet") {
      values.language = "";
      values.YOE = "";
      values.qualification = "";
      values.FOS = "";
    } else if (e.target.name === "qualification" || e.target.name === "FOS") {
      values.language = "";
      values.YOE = "";
      values.excerciseFreq = "";
      values.diet = "";
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form id="myForm" onSubmit={handleSubmit}>
        <h1>Welcome !!</h1>
        {inputs.map((input) => {
          if (!input.onlyIf || input.onlyIf === values.topic) {
            return (
              <Form
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                selectiveData={values.topic}
              />
            );
          }
          return null;
        })}
        <label id="feedback" name="feedback" for="feedback">
          Feedback
        </label>

        <textarea
          id="feedback"
          name="feedback"
          rows="5"
          cols="33"
          placeholder="Feedback"
          minlength="50"
          onChange={onChange}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
