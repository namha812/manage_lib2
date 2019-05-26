module.exports = function(sequelize, DataTypes)
{
    let Class = sequelize.define('class', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        className: {
            type: DataTypes.STRING,
            field: 'class_name',
            allowNull: false
        }
    })
    Class.associate = (models) => {
        Class.hasMany(models.student, {
            foreignKey: 'classId',
				as: 'student'
        })
    }
    return Class;
};