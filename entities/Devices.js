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
        article: { // articulo
            type: "varchar",
        },
        brand: { // marca
            type: "varchar",
        },
        serial: {
            type: "varchar",
        },
        diagnostic: {
            type: "varchar",
        },
        state: {    // si es 0:Recibido, 1:En revision, 2:Listo para entrega
            type: "int",
        }
    },
    relations: {
        user: {
            target: "Users",
            type: "many-to-one",
            cascade: true,
        }
    }
});