const Hapi = require("hapi");
const config = require("./config");
const routesHelloHapi = require("./routes/hello-hapi");
const routesShops = require("./routes/shops");
const routesOrders = require("./routes/orders");
const routesUsers = require("./routes/users");
// 引入自定义的插件配置
const pluginHapiSwagger = require("./plugins/hapi-swagger");
const pluginHapiPagination = require("./plugins/hapi-pagination");

const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
  port: config.port,
  host: config.host
});

const init = async () => {
  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger,
    pluginHapiPagination
  ]);
  server.route([
    // 创建一个简单的 hello hapi 接口
    ...routesHelloHapi,
    ...routesShops,
    ...routesOrders,
    ...routesUsers
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running ar: ${server.info.uri}`);
};

init();
