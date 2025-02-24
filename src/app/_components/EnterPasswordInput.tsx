"use client";

import { useState } from "react";

const EnterPasswordInput = () => {
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    // e.preventDefault();
    // if (isLoading) {
    //   return;
    // }
    // setIsLoading(true);
    // setError("");
    // try {
    //   await props.onSubmit(password);
    // } catch (e) {
    //   setError(e.message);
    // }
    // setIsLoading(false);
  };
  return (
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{"title"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">{"password"}</span>
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"password"}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* {error && <p className="text-red-500">{error}</p>} */}
          <div className="modal-action">
            {/* <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "loading" : "submit"}
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterPasswordInput;
