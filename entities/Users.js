var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Users", // Se va a utilizar una tabla con el nombre 'users' como comportamiento por defecto
    tableName: "users", // Opcional: Nombre que tendrá la tabla en la BD
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        phone: {
            type: "varchar",
        },
        document: {
            type: "varchar",
        },
        password: {
            type: "varchar",
        }
    },
    relations: {
        roles: {
            target: "Roles",
            type: "one-to-many",
            cascade: true,
        }
    }
});