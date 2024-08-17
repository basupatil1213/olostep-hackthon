import React from 'react'
import { useNavigate } from 'react-router-dom';

const AuthForm = ({type} : {type : 'login' | 'register'}) => {

  const navigate = useNavigate();

  const [form, setForm] = React.useState({
    email: "",
    password: "",
    name: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await fetch(`http://localhost:5000/auth/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          name: form.name
        }),
      });
      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      navigate('/scrap');

    } catch (err) {
      console.error(err);
      alert("Failed to authenticate");
    }
  }
  return (
    <form onSubmit={handleSubmit} >
      {type === "register" && <input type="text" placeholder="Name" name='name' value={form.name} onChange={handleChange} />}
      <input type="email" placeholder="example@example.com" name='email' value={form.email} onChange={handleChange} />
      <input type="password" placeholder="Password" name='password' value={form.password} onChange={handleChange} />
      <button type="submit">{type === "register" ? "Sign up" : "Sign in"}</button>
    </form>
  )
}

export default AuthForm