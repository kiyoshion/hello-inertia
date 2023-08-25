#!/bin/sh

echo "##### START composer #####"
composer dump-autoload --no-interaction --no-dev --optimize
echo "##### END composer #######"

echo "##### START npm #####"
npm install
npm run build
echo "##### END npm #######"

echo "##### START artisan #####"
chmod -R 777 storage bootstrap/cache
php artisan key:generate
php artisan storage:link
php artisan route:clear
php artisan cache:clear
php artisan config:clear
php artisan view:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan migrate --no-interaction --force
php artisan db:seed --force
echo "##### END artisan #######"

echo "##### START supervisord and SSR #####"
pm2 start bootstrap/ssr/ssr.js -n $APP_URL -i 1
supervisord -c $LARAVEL_PATH/.deploy/config/supervisor.conf
echo "##### END supervisord and SSR #######"
