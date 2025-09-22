#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run build

pip3 install --upgrade pip
pip3 install -r requirements.txt
