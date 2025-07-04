import { useState } from "react";
import axios from "axios";
function Register() {
  const [form, setForm] = useState({
    firstname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        form,
        { withCredentials: true }
      );
      alert(res.data);
    } catch (err) {
      alert("error" + err.response.data);
    }
  };
  return (
    <div className="bg-slate-500 flex items-center justify-center min-h-screen">
      <form
        className="login-box flex flex-col gap-4 p-6 bg-white rounded shadow min-h-60"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold text-lg">Sign up </h1>
        <input
          type="text"
          name="firstname"
          placeholder="Enter Username..."
          className="p-2 border rounded"
          value={form.firstname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email.."
          className="p-2 border-rounded"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="p-2 border-rounded"
          value={form.password}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;
