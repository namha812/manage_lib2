/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('classes', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		className: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'class_name'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'createdAt'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'updatedAt'
		}
	}, {
		tableName: 'classes'
	});
};
