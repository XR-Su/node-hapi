/**
 * @Name: 公共的分页入参校验配置
 * @Description:
 * @author RiSusss
 * @date 2019/5/10
 */
const Joi = require("joi");

const paginationDefine = {
  limit: Joi.number()
    .integer()
    .min(1)
    .default(10)
    .description("每页的条目数"),
  page: Joi.number()
    .integer()
    .min(1)
    .default(1)
    .description("页码数"),
  pagination: Joi.boolean().description("是否开启分页，默认为true")
};

module.exports = { paginationDefine };