tar -zxvf node-v6.2.0-linux-x64.tar.gz
cd node-v6.2.0-linux-x64/bin
ln -s node /usr/bin/node
ln -s npm /usr/bin/npm
npm install webpack -g
ln -s cnpm /usr/bin/cnpm