import mongoose from "mongoose"
import dns from "dns"
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])
const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected")

    } catch (error) {
        console.log(error)
    }
}

export default connectDB