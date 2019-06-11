/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	let Class = sequelize.define('classes', {
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
		isActive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: true,
			field: 'is_active'
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

	Class.associate = (models) => {
        Class.hasMany(models.student, {
            foreignKey: 'classId',
				as: 'student'
        })
	}
	
	return Class;
};
