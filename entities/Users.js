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
            unique: true,
        },
        password: {
            type: "varchar",
        }
    },
    relations: {
        roles: {
            target: "Roles",
            type: "many-to-one",
            cascade: true,
        }
    }
});