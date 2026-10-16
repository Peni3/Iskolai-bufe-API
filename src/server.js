const app = require('./app');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`A szerver fut: http://localhost:${PORT}`);
});