/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('book', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
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
			field: 'categoryId'
		},
		coverPrice: {
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'cover_price'
		},
		quality: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'quality'
		},
		isActive: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '1',
			field: 'is_active'
		},
		pusblishingHouseId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'publishing_house',
				key: 'id'
			},
			field: 'pusblishing_house_id'
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
};
