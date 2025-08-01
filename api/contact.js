import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send('Solo se permiten POST');
    }

    const { nombre, email, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
        return res.status(400).json({ error: 'Faltan campos' })
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${nombre}" <${process.env.EMAIL_USER}>`, // remitente autorizado
            to: process.env.EMAIL_TO, // tu correo de destino
            subject: 'Mensaje del formulario',
            text: mensaje
        });

        return res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar correo:', error);  // 👈 esto te dirá exactamente qué falló
        return res.status(500).json({ error: 'Error al enviar el correo' });
    }
}

document.getElementById('form-contacto').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const data = {
        nombre: form.nombre.value,
        email: form.email.value,
        mensaje: form.mensaje.value
    };

    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (res.ok) {
            alert('¡Mensaje enviado correctamente!');
            form.reset();
        } else {
            alert('Error: ' + (result.error || 'No se pudo enviar el mensaje'));
        }
    } catch (err) {
        alert('Error de conexión. Intenta de nuevo.');
    }
});