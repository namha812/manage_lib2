module.exports = function(sequelize, DataTypes)
{
    const Student = sequelize.define('student', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        fullName: {
            type: DataTypes.STRING,
            field: 'full_name',
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            field: 'password',
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            field: 'email',
            allowNull: false
        },
        sex: {
            type: DataTypes.INTEGER(2)
        },
        cardNumber: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'card_number'
        },
        address: {
            type: DataTypes.STRING(225),
            field: 'address'
        },
        sex: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        classId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    return Student;
};