const mongoose = require('mongoose');

/**
 * Connect to MongoDB Database
 * Uses connection string from environment variables
 */
const connectDB = async () => {
    try {
        console.log('🔄 Attempting to connect to MongoDB...');

        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
            family: 4 // Force IPv4 to avoid Issues with Node.js 18+ and IPv6
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        console.log(`📊 Database Name: ${conn.connection.name}`);
    } catch (error) {
        console.error(`\n❌ Error connecting to MongoDB:`);
        console.error(`   Error Name: ${error.name}`);
        console.error(`   Error Message: ${error.message}`);
        console.error(`   Error Stack: ${error.stack}`);
        console.error(`   Error Code: ${error.code || 'N/A'}`);

        // Provide specific troubleshooting guidance
        if (error.message.includes('ENOTFOUND') || error.message.includes('ETIMEDOUT')) {
            console.error('\n🔍 Possible causes:');
            console.error('   1. Network connectivity issue');
            console.error('   2. MongoDB Atlas IP whitelist - Add your IP to Network Access');
            console.error('   3. Check if cluster is paused or deleted');
        } else if (error.message.includes('Authentication failed') || error.message.includes('auth')) {
            console.error('\n🔍 Possible causes:');
            console.error('   1. Incorrect username or password');
            console.error('   2. Database user may not have proper permissions');
        } else if (error.message.includes('SSL') || error.message.includes('certificate')) {
            console.error('\n🔍 SSL/TLS Error Detected:');
            console.error('   1. This might be a Node.js/OpenSSL version compatibility issue');
            console.error('   2. You are using Node.js v22 which includes OpenSSL 3.x');
            console.error('   3. Try setting NODE_OPTIONS=--openssl-legacy-provider if the error persists');
            console.error('   4. Or consider downgrading to Node.js LTS v20');
        }

        console.warn('\n⚠️  Server starting without database connection. Some features may not work.\n');
    }
};

// Handle connection events
mongoose.connection.on('disconnected', () => {
    console.log('⚠️  MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
    console.error(`❌ MongoDB connection error: ${err}`);
});

module.exports = connectDB;
