const { createTransport } = require('nodemailer');

class Email {

    constructor(user, pass, email, port, service) {
        this.user = user;
        this.pass = pass;
        this.email = email;
        this.port = port;
        this.service = service
    }

    async sendMail(user) {
    
        const transporter = createTransport({
            //host: 'smtp.ethereal.email',
            service: this.service,
            port: this.port,
            secure: false,
            auth: {
                user: this.user , 
                pass: this.pass ,
            }
        });

        const html = `
            <h1>Nuevo Registro</h1>
            <pre>
                Email: ${user.email} 
                Nombre: ${user.nombre}
                Dirección: ${user.direccion}
                Edad:  ${user.edad}
                Teléfono: ${user.telefono}
                Avatar: ${user.avatar}

            </pre>
        `;

        try {
            const response = await transporter.sendMail({
                from: 'Coderhouse API',
                to: this.email,
                subject: 'Nuevo Registro',
                html,
            });

        } catch(err) {
            console.log(err);
        }
        
    }



}

module.exports =  Email;