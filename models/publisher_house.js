/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('publisherHouse', {
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
            type: DataTypes.BOOLEAN,
            field: 'is_active',
            allowNull: false,
            defaultValue: true
        },
		address: {
			type: DataTypes.STRING(225),
			allowNull: true,
			field: 'address'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'description'
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
		tableName: 'publisher_house'
	});
};
