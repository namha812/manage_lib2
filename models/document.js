/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('document', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		title: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'title'
		},
		fileUrl: {
			type: DataTypes.STRING(225),
			allowNull: false,
			field: 'file_url'
		},
		author: {
			type: DataTypes.STRING(225),
			allowNull: true,
			field: 'author'
		},
		note: {
			type: DataTypes.STRING(225),
			allowNull: true,
			field: 'note'
		},
		typeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'type_document',
				key: 'id'
			},
			field: 'typeId'
		}
	}, {
		tableName: 'document'
	});
};
