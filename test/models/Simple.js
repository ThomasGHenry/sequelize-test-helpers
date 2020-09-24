const model = (sequelize, DataTypes) => {
  const Simple = sequelize.define('Simple', {
    name: {
      type: new DataTypes.VIRTUAL(DataTypes.BOOLEAN)
    }
  })

  return Simple
}

module.exports = model
