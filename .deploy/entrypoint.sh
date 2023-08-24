#!/bin/sh

composer dump-autoload --no-interaction --no-dev --optimize

npm install
npm run build

php artisan key:generate
php artisan migrate --no-interaction --force

supervisord -c $LARAVEL_PATH/.deploy/config/supervisor.conf
