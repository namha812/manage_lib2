/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const HistoryInput = sequelize.define('historyInput', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		adminId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'admin_id'
		},
		quantity: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'quantity'
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
			field: 'created_at'
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'updated_at'
		}
	}, {
		tableName: 'history_input'
	});

	HistoryInput.associate = (models) => {
        HistoryInput.belongsTo(models.admin, {
            foreignKey: 'adminId',
				as: 'account'
		})
		HistoryInput.belongsTo(models.book, {
            foreignKey: 'bookId',
				as: 'book'
        })
	}

	return HistoryInput;
};
