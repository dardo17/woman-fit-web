const { mysqlPool } = require('../config/mysql');

class HorarioEntrenador {

    // Obtener todos los horarios
    static async obtenerHorarios() {
        const [rows] = await mysqlPool.query(`
            SELECT 
                id_horario,
                id_entrenadorFK,
                horario
            FROM horario_entrenador
            ORDER BY id_horario ASC
        `);

        return rows;
    }

    // Obtener horarios por entrenador
    static async obtenerPorEntrenador(id_entrenadorFK) {
        const [rows] = await mysqlPool.query(`
            SELECT 
                id_horario,
                id_entrenadorFK,
                horario
            FROM horario_entrenador
            WHERE id_entrenadorFK = ?
            ORDER BY id_horario ASC
        `, [id_entrenadorFK]);

        return rows;
    }

    // Crear horario
    static async crear(data) {
        const { id_entrenadorFK, horario } = data;

        const [result] = await mysqlPool.query(`
            INSERT INTO horario_entrenador (id_entrenadorFK, horario)
            VALUES (?, ?)
        `, [
            id_entrenadorFK,
            JSON.stringify(horario)
        ]);

        return {
            id_horario: result.insertId,
            id_entrenadorFK,
            horario
        };
    }

    // Actualizar horario
    static async actualizar(id, data) {
        const { id_entrenadorFK, horario } = data;

        const [result] = await mysqlPool.query(`
            UPDATE horario_entrenador
            SET id_entrenadorFK = ?, horario = ?
            WHERE id_horario = ?
        `, [
            id_entrenadorFK,
            JSON.stringify(horario),
            id
        ]);

        return result.affectedRows;
    }

    // Eliminar horario
    static async eliminar(id) {
        const [result] = await mysqlPool.query(`
            DELETE FROM horario_entrenador
            WHERE id_horario = ?
        `, [id]);

        return result.affectedRows;
    }
}

module.exports = HorarioEntrenador;