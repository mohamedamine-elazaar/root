import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // قائمة المستخدمين (state)
  const [list, setList] = useState([
    { name: "admin", password: "admin123", role: "admin" },
    { name: "user", password: "user123", role: "user" },
  ]);

  // قيم الإدخال
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // التنقل بين الصفحات
  const navigate = useNavigate();

  // دوال التعامل مع التغييرات في الحقول
  const getName = (e) => {
    setName(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  // دالة تسجيل الدخول
  const login = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const user = list.find((u) => u.name === name && u.password === password);

    if (user) {
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } else {
      alert("اسم المستخدم أو كلمة المرور غير صحيحة");
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form
        onSubmit={login}
        className="flex flex-col bg-white p-6 rounded-xl shadow-md w-80"
      >
        <label className="mb-2 font-semibold">Name:</label>
        <input
          type="text"
          onChange={getName}
          className="border border-gray-300 rounded p-2 mb-4"
        />

        <label className="mb-2 font-semibold">Password:</label>
        <input
          type="password"
          onChange={getPassword}
          className="border border-gray-300 rounded p-2 mb-4"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
