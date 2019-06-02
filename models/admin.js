module.exports = function(sequelize, DataTypes)
{
    const User = sequelize.define('admin', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email',
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            field: 'password',
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            field: 'role',
            allowNull: false
        },
        sex: {
            type: DataTypes.INTEGER(2)
        },
        fullName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'full_name'
        },
        address: {
            type: DataTypes.STRING(225),
            field: 'address'
        }
    })
    
    return User;
};