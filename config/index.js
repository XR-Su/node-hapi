/**
 * @Name: 后端服务的配置文件
 * @Description:
 * @author RiSusss
 * @date 2019/5/10
 */

require('env2')('./.env')

const { env } = process;

module.exports = {
  host: env.HOST,
  port: env.PORT,  
}