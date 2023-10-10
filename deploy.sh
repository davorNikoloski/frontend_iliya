echo "Swtichiong to bracnh master"
git checkout master

echo "building app"
npm run build

echo "Deploying files to server"
scp -r build/* root@iliyabinoski.com:/var/www/iliyabinoski.com

echo "done"