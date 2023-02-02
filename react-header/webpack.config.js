const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "lal",
    projectName: "react-header",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    /* externals: ["react-router-dom"], */
  });
}; /* quando o webpack rodar o pacote e ela buildar a aplicação final, o codigo dessa lib nao vai ser incluida */
