#!/bin/bash

forever stopall
sudo forever start /home/ubuntu/app/app.js
