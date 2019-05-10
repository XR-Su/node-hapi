/**
 * @Name: 定义店铺数据模型
 * @Description:
 * @author RiSusss
 * @date 2019/5/10
 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "shops",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      thumb_url: DataTypes.STRING
    },
    {
      tableName: "shops"
    }
  );
