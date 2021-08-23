module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        Namebrand: DataTypes.STRING,
        Color: DataTypes.STRING,
        Status: DataTypes.STRING,
        type: DataTypes.STRING
    })

    User.prototype.comparePassword = function (password) {
        if (password == this.password) {
            return true
        }
        return false
    }

    User.associate = function (models) { }
    
    return User;
}