var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Roles", // Se va a utilizar una tabla con el nombre 'roles' como comportamiento por defecto
    tableName: "roles", // Opcional: Nombre que tendrá la tabla en la BD
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
    },
})