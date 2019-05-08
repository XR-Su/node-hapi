const Joi = require('joi')
const GROUP_NAME = 'shops';

module.exports = [
  {
    method: 'GET',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
      validate: {
        query: {
          limit: Joi.number().integer().min(1).default(10).description('每页的条目数'),
          page: Joi.number().integer().min(1).default(1).description('页码数')
        },
        // headers: Joi.object({
        //   authorization: Joi.string().required(),
        // }).unknown(),
      }
    },
  },
  {
    method: 'GET',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表',
    },
  },
];