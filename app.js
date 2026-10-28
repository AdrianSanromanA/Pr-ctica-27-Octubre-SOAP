import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import soap from 'soap';
import { requestLogger } from './middlewares/logger.js';
import { conversionesService } from './services/conversiones.js';
import { geometriaService } from './services/geometria.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

export const createApp = () => {
    const app = express();

    // Aplicar el middleware de registro antes de los servicios SOAP
    app.use(requestLogger);
    app.use(express.json());

    app.use('/soap', router);

    // Leer los archivos WSDL
    const xmlConversiones = fs.readFileSync(path.join(__dirname, 'wsdl/conversiones.wsdl'), 'utf8');
    const xmlGeometria = fs.readFileSync(path.join(__dirname, 'wsdl/geometria.wsdl'), 'utf8');

    // Inicializar servidores SOAP sobre Express
    soap.listen(app, '/soap/conversiones', conversionesService, xmlConversiones, () => {
        console.log('Servicio SOAP Conversiones inicializado en /soap/conversiones?wsdl');
    });

    soap.listen(app, '/soap/geometria', geometriaService, xmlGeometria, () => {
        console.log('Servicio SOAP Geometria inicializado en /soap/geometria?wsdl');
    });

    return app;
};