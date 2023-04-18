module.exports = {
    apps: [{
      // App env
      env: {
        NODE_ENV: "development"
      },
      // auto restart
     // autorestart: true,
      // application name (default to script filename without extension)
      name: 'ffapi',
  
      // time
      time: true,
  
      // mode to start your app, can be “cluster” or “fork”, default fork
      exec_mode: 'cluster',
  
      //number of app instance to be launched
      instances: 'max', // Or a number of instances
  
      // script path relative to pm2 start
      script: './src/',
  
      // string containing all arguments passed via CLI to script
      args: 'start',
  
      // enable watch & restart feature, if a file change in the folder or subfolder, your app will get reloaded
      //watch: true,
  
      // your app will be restarted if it exceeds the amount of memory specified. human-friendly format : it can be “10M”, “100K”, “2G” and so on…
      max_memory_restart: '250M',
  
      // log date format (see log section)
      log_date_format: 'DD-MM-YYYY HH:mm:ss.SSS',
  
      // error file path (default to $HOME/.pm2/logs/XXXerr.log)
      error_file: './logs/error.log',
  
      // out file path (default to $HOME/.pm2/logs/XXXout.log)
      out_file: './logs/out.log',
  
      // This will make PM2 listen for that event to set the app online
      //wait_ready: true,
  
      // Set a cron job to restart the app every day at 00:00
     //cron_restart: '0 0 * * *',
    }]
  }
