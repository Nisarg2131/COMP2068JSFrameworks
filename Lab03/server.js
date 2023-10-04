const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(method, x, y) {
    let result;
    switch (method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            return 'Invalid method';
    }
    return `${x} ${method} ${y} = ${result}`;
}

app.use((req, res) => {
    const { method, x, y } = url.parse(req.url, true).query;
    const parsedX = parseFloat(x);
    const parsedY = parseFloat(y);

    if (!method || isNaN(parsedX) || isNaN(parsedY)) {
        res.end('Invalid parameters');
        return;
    }

    const result = calculate(method, parsedX, parsedY);
    res.end(result);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
