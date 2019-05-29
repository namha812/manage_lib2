/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('borrowPay', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		studentId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			primaryKey: true,
			field: 'created_at'
		},
		createdBy: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'created_by'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'updated_at'
		},
		updatedBy: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'updated_by'
		},
		expiryDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'expiry_date'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'status'
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		note: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'note'
		}
	}, {
		tableName: 'borrow_pay'
	});
};
