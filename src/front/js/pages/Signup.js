import React, { useState } from "react";

export const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  function handel_submit(e) {
    e.preventDefault();
  }
  return (
    <form class="row g-3">
      <div class="col-md-5">
        <label for="inputEmail4" class="form-label">
          Email
        </label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-5">
        <label for="inputPassword4" class="form-label">
          Password
        </label>
        <input type="password" class="form-control" id="inputPassword4" />
      </div>
      <div class="col-8">
        <label for="inputAddress" class="form-label">
          Address
        </label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div class="col-md-5">
        <label for="inputCity" class="form-label">
          City
        </label>
        <input type="text" class="form-control" id="inputCity" />
      </div>
      <div class="col-md-3">
        <label for="inputState" class="form-label">
          State
        </label>
        <select id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">
          Zip
        </label>
        <input type="text" class="form-control" id="inputZip" />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">
          Sign Up!
        </button>
      </div>
    </form>
  );
};
