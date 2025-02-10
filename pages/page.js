"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./App.css";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
     
      localStorage.setItem("fakeToken", "your_fake_token_here");
      router.push("/login"); 
    } else {
      setError("Lütfen geçerli bir e-posta ve şifre girin.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#F3F6FD] to-[#E0E7FF]">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#145389] mb-8 text-center">Giriş Yap</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-posta Adresi
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#145389] transition duration-200"
              placeholder="E-posta adresinizi girin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şifre
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#145389] transition duration-200"
              placeholder="Şifrenizi girin"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#145389] text-white py-2 px-4 rounded-md hover:bg-[#0f406c] transition-colors"
          >
            Giriş Yap
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Hesabınız yok mu? <a href="/register" className="text-[#145389] hover:underline">Kayıt Ol</a>
        </p>
      </div>
    </div>
  );
}