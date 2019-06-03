/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	const BrrowPay = sequelize.define('borrowPay', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		studentId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'student_id'
		},
		bookId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'book_id'
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
		note: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'note'
		},
		borrowDate: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'borrow_date'
		},
		payDate: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'pay_date'
		},
		borrowTotal: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'borrow_total'
		}
	}, {
			tableName: 'borrow_pay'
		});
	BrrowPay.associate = (models) => {
		BrrowPay.belongsTo(models.student, {
			foreignKey: 'studentId',
			as: 'student'
		})
		BrrowPay.belongsTo(models.book, {
			foreignKey: 'bookId',
			as: 'book'
		})
	}
	return BrrowPay
};
