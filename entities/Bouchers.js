var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Bouchers", // Se va a utilizar una tabla con el nombre 'bouchers' como comportamiento por defecto
    tableName: "bouchers", // Opcional: Nombre que tendrá la tabla en la BD
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        checkin: {
            type: "date",
        },
        checkout: {
            type: "date",
        },
        total: {
            type: "real",
        },
        state: {
            type: "varchar",
        },
        description: {
            type: "varchar",
        },
    },
    relations: {
        users: {
            target: "Users",
            type: "one-to-one",
            cascade: true,
        },
        devices: {
            target: "Users",
            type: "one-to-one",
            cascade: true,
        }
    }
});