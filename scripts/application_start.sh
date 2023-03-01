#!/bin/bash

# Stop all servers and start the server as a daemon
# forever stopall
# forever start /home/ubuntu/nodejs/app.js

# Change to the app directory
cd /home/ubuntu/app

# Start the server
sudo node app.js
