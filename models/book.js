/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	const Book = sequelize.define('book', {
		id: {
			type: DataTypes.INTEGER(11),
			autoIncrement: true,
			primaryKey: true,
			field: 'id'
		},
		bookName: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'book_name'
		},
		author: {
			type: DataTypes.STRING(150),
			allowNull: true,
			field: 'author'
		},
		categoryId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'category',
				key: 'id'
			},
			field: 'category_id'
		},
		coverPrice: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'cover_price'
		},
		quantity: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'quantity'
		},
		isActive: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '1',
			field: 'is_active'
		},
		publisherHouseId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'publisher_house',
				key: 'id'
			},
			field: 'publisher_house_id'
		},
		content: {
			type: DataTypes.STRING(2000),
			allowNull: true,
			field: 'content'
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
			tableName: 'book'
		});
	Book.associate = (models) => {
		Book.belongsTo(models.category, {
			foreignKey: 'categoryId',
			as: 'category'
		});
		Book.belongsTo(models.publisherHouse, {
			foreignKey: 'publisherHouseId',
			as: 'publisherHouse'
		})
		Book.hasMany(models.borrowPay, {
			foreignKey: 'bookId',
			as: 'brrowPay'
		})
	}

	return Book;
};
