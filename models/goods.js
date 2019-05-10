/**
 * @Name: 定义商品数据模型
 * @Description:
 * @author RiSusss
 * @date 2019/5/10
 */

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "goods",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      shop_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      thumb_url: DataTypes.STRING
    },
    {
      tableName: "goods"
    }
  );
