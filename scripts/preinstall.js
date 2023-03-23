/*
 * @Author: 41
 * @Date: 2023-03-23 16:32:10
 * @LastEditors: 41
 * @LastEditTime: 2023-03-23 16:32:27
 * @Description:
 */
if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  );
  process.exit(1);
}
