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
		address: {
			type: DataTypes.STRING(225),
			allowNull: true,
			field: 'address'
		}
	}, {
		tableName: 'publishing_house'
	});
};
