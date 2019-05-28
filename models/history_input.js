/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('historyInput', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'userId'
		},
		quality: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'quality'
		},
		bookId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'bookId'
		},
		documentId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'documentId'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'created_at'
		}
	}, {
		tableName: 'history_input'
	});
};
