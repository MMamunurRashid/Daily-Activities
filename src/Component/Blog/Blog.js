import React from "react";
import "./Blog.css";
import Swal from "sweetalert2";
const Blog = () => {
  const questionOne = () => {
    Swal.fire(
      "How Does React Work?",
      "ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code",
      "question"
    );
  };
  const questionTwo = () => {
    Swal.fire(
      "Difference between props and state.",
      "Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.",
      "question"
    );
  };
  const questionThree = () => {
    Swal.fire(
      "Usages of useEffect",
      "The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.",
      "question"
    );
  };

  return (
    <div className="pt-20">
      <h1 className="text-center font-bold text-3xl pb-8">Blog</h1>
      <div className="Blog justify-evenly shadow-2xl m-5 py-5 rounded-xl">
        <div className="each-blog">
          <h1 className="text-xl font-bold">How Does React Work?</h1>
          <button
            onClick={questionOne}
            className=" mt-1 border-0 bg-indigo-600 hover:bg-indigo-300 active:bg-red-500 text-white font-semibold rounded-xl px-12 py-1"
          >
            Answer
          </button>
        </div>
        <div className="each-blog">
          <h1 className="text-xl font-bold">
            Difference between props and state.
          </h1>
          <button
            onClick={questionTwo}
            className=" mt-1 border-0 bg-indigo-600 hover:bg-indigo-300 active:bg-red-500 text-white font-semibold rounded-xl px-12 py-1"
          >
            Answer
          </button>
        </div>
        <div className="each-blog">
          <h1 className="text-xl font-bold">Usages of useEffect</h1>
          <button
            onClick={questionThree}
            className=" mt-1 border-0 bg-indigo-600 hover:bg-indigo-300 active:bg-red-500 text-white font-semibold rounded-xl px-12 py-1"
          >
            Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
