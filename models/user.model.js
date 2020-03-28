const bcrypt = require('bcrypt');

('use strict');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        validate: {
          is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i
        }
      }
    },
    {
      hooks: {
        beforeCreate: async user => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
        }
      },
      defaultScope: {
        attributes: { exclude: ['password'] }
      },
      underscored: true
    }
  );
  User.associate = function(models) {
    User.hasMany(models.List, { as: 'creator', foreignKey: 'creator_id' });
    User.belongsToMany(models.List, { as: 'lists', through: 'list_members' });
  };
  return User;
};
