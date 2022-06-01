const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CLUSTER, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Database online')
  } catch (error) {
    throw new Error('Error connecting to database: ' + error)
  }
}

module.exports = {
  dbConnection
}
