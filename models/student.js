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
        email: {
            type: DataTypes.STRING,
            field: 'email',
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            field: 'phone',
            allowNull: true
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
        isActive: {
            type: DataTypes.BOOLEAN,
            field: 'is_active',
            allowNull: false,
            defaultValue: true
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

    Student.associate = (models) => {
        Student.belongsTo(models.classes, {
            foreignKey: 'classId',
				as: 'class'
        })
        Student.hasMany(models.borrowPay, {
            foreignKey: 'studentId',
				as: 'borrowPay'
        })
	}
    return Student;
};