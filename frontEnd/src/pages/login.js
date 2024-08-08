import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import image from '../assets/images/conge.jpg'
import { loginUser } from '../helper/helperUser';
import { useToast } from '../layout/toaster';
import { useAuthContext } from '../hooks/useAuthContext';

export const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useAuthContext()

  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState(null);
  const {showToast} = useToast();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(data); // Call loginUser function once
      localStorage.setItem("isAdmin", res.user.isAdmin);
      const {token, user, message} = res
      dispatch({type: 'LOGIN', payload: {user,token}})

      showToast(message,'success');

      if (user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/user");
        
      }
      setData({});
    } catch (error) {
      const errorMessage = error.error;
      showToast(errorMessage,'error');
      setErr(error.error);  
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center dark:bg-gray-900 ">
      {/* login container */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center dark:bg-gray-800">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74] dark:text-gray-100">Login</h2>
          <p className="text-xs mt-4 text-[#002D74] dark:text-gray-100">If you are already a member, easily log in</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border "
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
              required
            />
             <div className="relative">
      <input
        className="p-2 rounded-xl border w-full "
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
        required
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={showPassword ? "blue" : "gray"}
        className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        viewBox="0 0 16 16"
        onClick={togglePasswordVisibility}
      >
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
      </svg>
    </div>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit">Login</button>
          </form>

          <div className="mt-6 grid  items-center text-gray-400 ">
            <hr />
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74] dark:text-gray-100">
            <p>Dont have an account?</p>
            <Link to="/signup">
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 dark:text-gray-800">Register</button>
            </Link>
          </div>
        </div>

        {/* image */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={image} alt="login" />
        </div>
      </div>
    </section>
  );
};

 /*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === 'admin@example.com' && password === 'test') {

      window.location.href = '/admin';
    }
    else if(email === 'user@example.com' && password === 'test'){
      window.location.href = '/user';
    } 
    else {

      alert('Invalid email or password');
    }
  };*/