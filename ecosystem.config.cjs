module.exports = {
  apps: [
    {
      script: "amtf.js",
      watch: ".",

      env: {
        VUE_APP_PARSE_SERVER_URL: "http://13.228.189.66/parse",
        VUE_APP_PARSE_APP_ID: "ITYDPoZKA1nYeyFaUgPlYM99sDL2I5cNQ7huEKcw",
        VUE_APP_PARSE_JS_KEY: "hRETBihNdF7SO9FHM78GxJLbo4cYCuEi4XrrDWED",
      },
      // add development environment variables
      env_development: {
        PORT: 8080,
        SERVER_BASE_URL: "http://13.228.189.66",
        DEBUG: "express-http-proxy",
      },
      // add production environment variables
      env_production: {
        NODE_ENV: "production",
        PORT: 8080,
        SERVER_BASE_URL: "http://13.228.189.66",
      },
    },
  ],

  deploy: {
    // "production" is the environment name
    production: {
      // SSH key path, default to $HOME/.ssh
      key: "~/.ssh/aws-amtf.pem",
      // SSH user
      user: "ubuntu",
      // SSH host
      host: ["13.228.189.66"],
      // SSH options with no command-line flag, see 'man ssh'
      // can be either a single string or an array of strings
      ssh_options: "StrictHostKeyChecking=no",
      // GIT remote/branch
      ref: "origin/master",
      // GIT remote
      repo: "https://github.com/amitabha-pure-land/amitabha-pure-land.github.io.git",
      // path in the server
      path: "/home/ubuntu/code/amitabha-pure-land",
      // Pre-setup command or path to a script on your local machine
      "pre-setup": "",
      // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
      "post-setup": "",
      // pre-deploy action
      "pre-deploy-local": "",
      // post-deploy action
      "post-deploy":
        "npm install --only=prod && NODE_ENV=$NODE_ENV VUE_APP_PARSE_SERVER_URL=$VUE_APP_PARSE_SERVER_URL VUE_APP_PARSE_APP_ID=$VUE_APP_PARSE_APP_ID VUE_APP_PARSE_JS_KEY=$VUE_APP_PARSE_JS_KEY npm run build && pm2 reload ecosystem.config.cjs --env production",
    },
  },
};
