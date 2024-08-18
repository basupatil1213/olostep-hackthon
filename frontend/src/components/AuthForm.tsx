import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../App';

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
      const response = await fetch(`${BASE_URL}/auth/${type}`, {
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
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate('/scrap');

    } catch (err) {
      console.error(err);
      alert("Failed to authenticate");
    }
  }


  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{type === 'register' ? 'Sign Up' : 'Sign In'}</h2>
      {type === 'register' && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      )}
      <div className="mb-4">
        <input
          type="email"
          placeholder="example@example.com"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        {type === 'register' ? 'Sign up' : 'Sign in'}
      </button>
    </form>
  );
};

export default AuthForm;
