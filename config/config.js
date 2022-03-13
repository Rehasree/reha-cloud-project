const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: "mongodb+srv://Munny:Munny@2002@cluster0.6d1os.mongodb.net/Cloudass?retryWrites=true&w=majority"
}

export default config
