const transporter = require("../config/mailer");
const fs = require("fs");
const path = require("path");

const envioMail = async (req, res) => {
  try {
    const { destinatario, message } = req.body;

    if (!destinatario || !message) throw new Error("Datos no proporcionados");

    await transporter.sendMail({
      from: "giulianodv97@gmail.com",
      to: destinatario,
      subject: "Envio de prueba",
      text: `Esto es el cuerpo del mensaje`,
    });

    res.status(200).json({ message: "Correo enviado" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ error });
  }
};

const envioMailPlantilla = async (req, res) => {
  try {
    const template = fs.readFileSync(
      path.join(__dirname, "..", "templates/correo.html"),
      "utf-8"
    );

    await transporter.sendMail({
      from: "giulianodv97@gmail.com",
      to: "tovapec410@dariolo.com",
      subject: "Envio de Plantilla",
      html: template.replace("{{NOMBRE}}", "Agustin"),
      attachments: [
        {
          filename: "hombre-arania.jpg",
          path: "./public/imagen.jpg",
          cid: "imagen",
        },
      ],
    });

    res.status(200).json({ message: "Correo enviado" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ error });
  }
};

module.exports = {
  envioMail,
  envioMailPlantilla,
};
