const mongoose = require('mongoose');
const mongoURI =  `mongodb+srv://stayhealthy_dbaccess:S9lTasNbhuG9Dto1@stayhealthycluster.aqko8.mongodb.net/`; // for local machine work
// const mongoURI =  "mongodb://root:FgXeMEyshmdf2yiTUIrBg7iy@172.21.19.152:27017"; // for skills network work

const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 3;
    const count = retryCount ?? 0;
    try {
        await mongoose.connect(mongoURI, { dbName: 'stayhealthy' });
        console.info('Connected to Mongo Successfully');

        return;
    } catch (error) {
        console.error(error);
        console.log(mongoURI);

        const nextRetryCount = count + 1;

        if (nextRetryCount >= MAX_RETRIES) {
            throw new Error('Unable to connect to Mongo!');
        }

        console.info(`Retrying, retry count: ${nextRetryCount}`)

        return await connectToMongo(nextRetryCount);

    }
};

module.exports = connectToMongo;