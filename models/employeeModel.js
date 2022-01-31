module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("employee", {
        FirstName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Employee;
}