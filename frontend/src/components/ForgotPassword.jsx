import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

const ForgotPassword = () => {
  const { backendUrl } = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/forgot-password`, { email })
      if (data.success) {
        toast.success('Password reset link sent to your email!')
        navigate('/login')
      } else {
        toast.error(data.message || 'Something went wrong')
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error sending reset link')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.form
        onSubmit={handleForgotPassword}
        initial={{ opacity: 0.2, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-10 rounded-xl shadow-lg w-[90%] max-w-md"
      >
        <h1 className="text-center text-2xl font-semibold text-neutral-700">Forgot Password</h1>
        <p className="text-sm text-center text-slate-500 mt-2">
          Enter your registered email to receive a password reset link.
        </p>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-6">
          <img src={assets.email_icon} alt="email" />
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none text-sm flex-1"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 w-full text-white py-2 mt-6 rounded-full hover:bg-blue-700 transition"
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>

        <p
          className="text-sm text-center text-blue-600 mt-4 cursor-pointer"
          onClick={() => navigate('/login')}
        >
          Back to Login
        </p>
      </motion.form>
    </div>
  )
}

export default ForgotPassword
