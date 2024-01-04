import React from "react";

const TestPage = async ({ formData }) => {
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default TestPage;
