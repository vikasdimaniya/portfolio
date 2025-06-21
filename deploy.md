git pull origin main
pm2 list
pm2 delete [id]
PORT=3100 pm2 start node_modules/next/dist/bin/next --name "vikas-portfolio" -- start