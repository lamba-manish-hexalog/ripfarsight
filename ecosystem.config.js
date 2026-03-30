module.exports = {
  apps: [{
    name: 'rfs-backend',
    script: './backend/dist/app.js',
    cwd: '/var/www/ripfarsight',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env_production: {
      NODE_ENV: 'production',
      PORT: 4000,
    },
  }],
};
