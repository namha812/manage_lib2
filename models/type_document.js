/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('typeDocument', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'name'
		},
		describe: {
			type: DataTypes.STRING(225),
			allowNull: true,
			field: 'describe'
		}
	}, {
		tableName: 'type_document'
	});
};
