import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, email, empresa, codArea, telefono, presupuesto, mensaje } = req.body;

            if (!name || !email || !empresa) {
                return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
            }

            const emailTemplatePath = path.join(process.cwd(), 'htmlmail', 'message.html');
            const emailHtmlContent = fs.readFileSync(emailTemplatePath, 'utf-8');

            const transporter = nodemailer.createTransport({
                host: 'smtp.hostinger.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
                tls: {
                    ciphers: "SSLv3",
                },
            });

            const mailOptionsToAdmin = {
                from: process.env.SMTP_USER,
                to: 'lucas@gaucho.digital',
                subject: `Nuevo mensaje de ${name} - ${empresa}`,
                text: mensaje,
                html: `
                <p>Nombre: ${name}</p>
                <p>Email:${email}</p>
                <p>Empresa: ${empresa}</p>
                <p>Código de Área: ${codArea || 'No proporcionado'}</p>
                <p>Teléfono: ${telefono || 'No proporcionado'}</p>
                <p>Presupuesto: ${presupuesto || 'No proporcionado'}</p>
                <p>Mensaje: ${mensaje || 'No proporcionado'}</p>
                `,
            };

            const mailOptionsToUser = {
                from: process.env.SMTP_USER,
                to: email,
                subject: 'Confirmación de recepción de su mensaje',
                html: emailHtmlContent,
            };

            await transporter.sendMail(mailOptionsToAdmin);
            await transporter.sendMail(mailOptionsToUser);

            return res.status(200).json({ message: 'Mensaje enviado correctamente.' });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).json({ message: 'Error al enviar el mensaje.' });
        }
    } else {
        return res.status(405).json({ message: 'Método no permitido' });
    }
}
