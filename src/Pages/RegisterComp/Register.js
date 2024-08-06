import { useState } from "react";

function AddUser() {
  const [details, setDetails] = useState({
    name: "Nada",
    email: "nada@gmail.com",
    username: "Nada Ali",
    password: "1@bbb",
    confirmpassword: "1@bbb",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    userError: "",
    passwordError: "",
    confirmError: "",
  });

  const handleForm = (e) => {
    if (e.target.name === "name") {
      setDetails({
        ...details,
        name: e.target.value,
      });
      setErrors({
        ...errors,
        nameError:
          e.target.value.length === 0
            ? "Please, this field is required"
            : e.target.value.length < 5
            ? "Enter Valid Name"
            : "",
      });
    } else if (e.target.name === "email") {
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
    } else if (e.target.name === "username") {
      setDetails({
        ...details,
        username: e.target.value,
      });
      setErrors({
        ...errors,
        userError:
          e.target.value.length === 0
            ? "Please, this field is required"
            : e.target.value.length < 6
            ? "Enter Valid UserName"
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
    } else if (e.target.name === "confirmpassword") {
      setDetails({
        ...details,
        confirmpassword: e.target.value,
      });
      setErrors({
        ...errors,
        confirmError:
          e.target.value.length === 0
            ? "Please, this field is required"
            : e.target.value !== details.password
            ? "Password is not match"
            : "",
      });
    }
  };

  const HandleSubmit = (e) => {
    if (
      !errors.nameError &&
      !errors.userError &&
      !errors.emailError &&
      !errors.passwordError &&
      !errors.confirmError
    ) {
      e.preventDefault();
    }
  };

  return (
    <>
      <form onSubmit={(e) => HandleSubmit(e)}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${errors.nameError && "border-danger"}`}
            name="name"
            value={details.name}
            onChange={(e) => handleForm(e)}
          />
                    <label htmlFor="nameInput">Name</label>

          {errors.nameError && (
            <p className="text-danger">{errors.nameError}</p>
          )}
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className={`form-control ${errors.emailError && "border-danger"}`}
            name="email"
            value={details.email}
            onChange={(e) => handleForm(e)}
          />
                    <label htmlFor="emailInput">Email</label>
          {errors.emailError && (
            <p className="text-danger">{errors.emailError}</p>
          )}
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${errors.userError && "border-danger"}`}
            name="username"
            value={details.username}
            onChange={(e) => handleForm(e)}
          />
        <label htmlFor="usernameInput">Username</label>
          {errors.userError && (
            <p className="text-danger">{errors.userError}</p>
          )}
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

        <div className="form-floating mb-3">
          <input
            type="password"
            className={`form-control ${errors.confirmError && "border-danger"}`}
            name="confirmpassword"
            value={details.confirmpassword}
            onChange={(e) => handleForm(e)}
          />
        <label htmlFor="confirmPasswordInput">Confirm Password</label>
          {errors.confirmError && (
            <p className="text-danger">{errors.confirmError}</p>
          )}
        </div>

        <button
          disabled={
            errors.nameError ||
            errors.emailError ||
            errors.passwordError ||
            errors.confirmError ||
            errors.userError
          }
          type="submit"
          className="btn btn-info"
        >
          Register
        </button>
      </form>
    </>
  );
}

export default AddUser;