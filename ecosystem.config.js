module.exports = {
  apps: [
    {
      name: 'nuxt-app',
      script: 'node_modules/.bin/nuxt',
      args: 'start',
      cwd: '/path/to/your/nuxt-app', // Path to your application
      instances: 'max', // Or a specific number of instances
      exec_mode: 'cluster', // Enable clustering for better performance
      env: {
        NODE_ENV: 'production'
        // Add other environment variables here
      },
      watch: false, // Set to true if you want PM2 to watch for file changes
      max_memory_restart: '1G' // Restart if memory usage exceeds this amount
    }
  ]
}
