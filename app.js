const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.method === 'POST') {
        let data = '';

        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            const params = new URLSearchParams(data);
            const Numero1 = parseFloat(params.get('Numero1'));
            const Numero2 = parseFloat(params.get('Numero2'));
            const Numero3 = parseFloat(params.get('Numero3'));

            const suma = Numero1 + Numero2;
            const multiplicacion = suma * Numero3;

            res.end(`<h1>R1 = ${suma} y R2 = ${multiplicacion}</h1>`);
        });
    } else {
        res.end(`<form method="POST">
            <input type="number" name="Numero1" placeholder="Numero 1" required><br><br>
            <input type="number" name="Numero2" placeholder="Numero 2" required><br><br>
            <input type="number" name="Numero3" placeholder="Numero 3" required><br><br>
            <button type="submit">Calcular</button>
        </form>`);
    }
});

server.listen(3005);


