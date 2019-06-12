/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Category =  sequelize.define('category', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(225),
			allowNull: false,
			field: 'name'
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: true,
			field: 'is_active'
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
		tableName: 'category'
	});
	Category.associate = (models) => {
		Category.belongsTo(models.admin, {
			foreignKey: 'createdBy',
			as: 'admin'
		});
	}
	return Category;
};
