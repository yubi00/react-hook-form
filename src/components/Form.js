import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <input type='text' placeholder='name' />{" "}
      </div>
      <div>
        <input type='text' placeholder='email' />{" "}
      </div>
      <div>
        <input type='password' placeholder='password' />
      </div>
      <div>
        <input type='password' placeholder='confirm password' />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
