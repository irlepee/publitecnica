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
            from: `"${nombre}" <${email}>`,
            to: process.env.EMAIL_TO,
            subject: 'Nuevo mensaje de contacto',
            text: mensaje
        });

        return res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
}
