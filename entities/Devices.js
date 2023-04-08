var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Devices", // Se va a utilizar una tabla con el nombre 'devices' como comportamiento por defecto
    tableName: "devices", // Opcional: Nombre que tendrá la tabla en la BD
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        articulo: {
            type: "varchar",
        },
        marca: {
            type: "varchar",
        },
        serial: {
            type: "varchar",
        },
        diagnostico: {
            type: "varchar",
        }
    },
    relations: {
        users: {
            target: "Users",
            type: "many-to-one",
            cascade: true,
        }
    }
});