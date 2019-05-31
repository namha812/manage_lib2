/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('publishingHouse', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(155),
			allowNull: false,
			field: 'name'
		},
		isActive: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			defaultValue: '1',
			field: 'is_active'
		},
		address: {
			type: DataTypes.STRING(225),
			allowNull: true,
			field: 'address'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'created_at'
		},
		createdBy: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'created_by'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'updated_at'
		}
	}, {
		tableName: 'publishing_house'
	});
};
