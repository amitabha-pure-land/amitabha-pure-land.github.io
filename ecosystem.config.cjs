module.exports = {
  apps: [
    {
      script: "amtf.js",
      watch: true,
      ignore_watch: [".git", "node_modules"],
      watch_options: {
        followSymlinks: false,
      },

      env: {
        PORT: 8080,
        SERVER_BASE_URL: "http://13.228.189.66",
        GITHUB_URL:
          "https://github.com/amitabha-pure-land/amitabha-pure-land.github.io.git",
        GITHUB_SECRET: "5RiPxmZGKp_8f459d68b2a2",
      },
      // add development environment variables
      env_development: {
        DEBUG: "express-http-proxy",
      },
      // add production environment variables
      env_production: {
        NODE_ENV: "production",
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
      "post-setup":
        "mkdir -p /home/ubuntu/code/amitabha-pure-land/deploy_buffer/",
      // pre-deploy action
      "pre-deploy-local":
        "npm install --only=prod && NODE_ENV=production npm run build_web && tar -czvf online.tar.gz online && scp -r -i ~/.ssh/aws-amtf.pem .env* ubuntu@13.228.189.66:/home/ubuntu/code/amitabha-pure-land/deploy_buffer/ && scp -r -i ~/.ssh/aws-amtf.pem online.tar.gz ubuntu@13.228.189.66:/home/ubuntu/code/amitabha-pure-land/deploy_buffer/ && rm online.tar.gz",
      // post-deploy action
      "post-deploy":
        "npm install --only=prod && npm prune && rm -rf online && mv ../deploy_buffer/.env* . && tar xvzf ../deploy_buffer/online.tar.gz && pm2 reload ecosystem.config.cjs --env production",
    },
  },
};
