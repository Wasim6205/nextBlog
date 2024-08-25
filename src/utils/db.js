import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("connection successfull"))
        .catch((err) => console.log("connection failed"))
    } catch (error) {
        throw new Error("Connection failed!")
    }
}

export default connect