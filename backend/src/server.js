const app = require('./app');
const sequelize = require('./config/database');

const PORT = 3000;

async function startServer() {
    try {
        await sequelize.authenticate();

        console.log('Database connected successfully');

        app.listen(PORT, () => {
            console.log(`Bloom & Co. API running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
}

startServer();