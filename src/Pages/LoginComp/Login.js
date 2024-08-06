import { useState } from "react";

function LoginUser() {
  const [details, setDetails] = useState({
    email: "nada@gmail.com",
    password: "1@bbb",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleForm = (e) => {
    if (e.target.name === "email") {
      setDetails({
        ...details,
        email: e.target.value,
      });
      setErrors({
        ...errors,
        emailError:
          !new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(
            e.target.value
          )
            ? "Enter valid Email"
            : "",
      });
    } else if (e.target.name === "password") {
      setDetails({
        ...details,
        password: e.target.value,
      });
      setErrors({
        ...errors,
        passwordError:
          e.target.value.length === 0
            ? "Please, this field is required"
            : !new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/).test(
                e.target.value
              )
            ? "Enter Valid Password"
            : "",
      });
    }
  };

  const HandleSubmit = (e) => {
    if (!errors.emailError && !errors.passwordError) {
      e.preventDefault();
      alert("login now ")
    }
  };

  return (
    <>
    <h1 className="text-center"> Login </h1>
      <form onSubmit={(e) => HandleSubmit(e)}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className={`form-control ${errors.emailError && "border-danger"}`}
            name="email"
            value={details.email}
            onChange={(e) => handleForm(e)}
          />
          <label htmlFor="emailInput">Email</label>
          {errors.emailError && <p className="text-danger">{errors.emailError}</p>}
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className={`form-control ${errors.passwordError && "border-danger"}`}
            name="password"
            value={details.password}
            onChange={(e) => handleForm(e)}
          />
          <label htmlFor="passwordInput">Password</label>
          {errors.passwordError && (
            <p className="text-danger">{errors.passwordError}</p>
          )}
        </div>
        <button
          disabled={errors.emailError || errors.passwordError}
          type="submit"
          className="btn btn-info"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default LoginUser;