#!/bin/bash

sudo forever stopall
sudo forever start /home/ubuntu/app/app.js
