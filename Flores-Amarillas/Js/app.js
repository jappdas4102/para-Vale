<!DOCTYPE html>
<html>
<head>
    <title>Jardín de Flores</title>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="myCanvas" width="800" height="600"></canvas>

    <script>
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');

        function dibujarFlor(ctx, x, y, numPetalos, radioPetalo, colorPetalo, colorCentro, grosorTallo = 0) {
            // Dibujar todos los pétalos en un solo frame
            for (let i = 0; i < numPetalos; i++) {
                const angulo = (i / numPetalos) * Math.PI * 2;
                const xPetalo = x + Math.cos(angulo) * radioPetalo;
                const yPetalo = y + Math.sin(angulo) * radioPetalo;

                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(xPetalo, yPetalo);
                ctx.stroke();
                ctx.fillStyle = colorPetalo;
                ctx.fill();
            }

            // Dibujar el centro de la flor
            ctx.beginPath();
            ctx.arc(x, y, radioPetalo / 5, 0, Math.PI * 2);
            ctx.fillStyle = colorCentro;
            ctx.fill();

            // Dibujar el tallo si es necesario
            if (grosorTallo > 0) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, y + 100); // Ajusta la altura del tallo
                ctx.lineWidth = grosorTallo;
                ctx.stroke();
            }
        }

        function crearVariasFlores(numFlores, opciones) {
            const espacioX = canvas.width / 4;
            const espacioY = canvas.height / 3;

            for (let i = 0; i < numFlores; i++) {
                const fila = Math.floor(i / 4);
                const columna = i % 4;
                const x = espacioX * columna + espacioX / 2;
                const y = espacioY * fila + espacioY / 2;

                dibujarFlor(ctx, x, y, ...Object.values(opciones));
            }
        }

        // Crear 30 flores con diferentes colores y tamaños
        crearVariasFlores(30, {
            numPetalos: 6,
            radioPetalo: 30,
            colorPetalo: 'hsl(' + Math.random() * 360 + ', 100%, 50%)', // Colores aleatorios
            colorCentro: 'white',
            grosorTallo: 3
        });
    </script>
</body>
</html>