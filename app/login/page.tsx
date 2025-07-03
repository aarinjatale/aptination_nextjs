// app/login/page.tsx
import Image from 'next/image';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex items-center mb-6">
        {/* Logo Image */}
        <Image
          src="/icons/logo.png"
          alt="AptiNation Logo"
          width={48}
          height={48}
          className="mr-2 rounded"
        />
        <span className="text-5xl font-extrabold tracking-tight">AptiNation</span>
      </div>

      <div className="bg-white rounded-3xl shadow-lg px-10 py-8 w-full max-w-md flex flex-col items-center">
        <h2 className="text-4xl font-extrabold mb-6 mt-2">Login</h2>
        <form className="w-full">
          <div className="mb-5">
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-5 py-3 rounded-full border border-gray-300 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-3">
            <label className="block text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-5 py-3 rounded-full border border-gray-300 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-6 text-right">
            <a href="#" className="text-sm underline text-black hover:text-gray-700">
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-3 rounded-full text-lg transition cursor-pointer hover:bg-gray-900 "
          >
            Get Started
          </button>
        </form>
      </div>
      <div className="mt-4">
        <a href="#" className="text-lg underline text-black hover:text-gray-700">
          SignUp
        </a>
      </div>
    </div>
  );
}
