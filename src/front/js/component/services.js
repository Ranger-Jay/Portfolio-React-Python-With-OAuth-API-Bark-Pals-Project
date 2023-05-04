import React, { useState } from "react";

function Services() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        Select your service:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">--Please choose an option--</option>
          <option value="post-a-review">Post A Review</option>
          <option value="check-my-messages">Check My Messages</option>
          <option value="find-parks">Find A Dog Park</option>
        </select>
      </label>
    </div>
  );
}

export default Services;
