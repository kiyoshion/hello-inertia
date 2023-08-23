# Hello Inertia 1.x

This is a sample application to develop Laravel 10.x, Inertia 1.x, React 18.x and Vite 4.x. I have deployed this application on my VPS with SSR.

## What's difference between Laravel 9.x and 10.x?

### breeze:install

Laravel 9.x
```
php artisan breeze:install react --ssr
```

Laravel 10.x
```
php artisan breeze:install
```

Don't be afraid, it doesn't need any option. It changed to interactive.

## How to develop Laravel app with Inertia

```
curl -s "https://laravel.build/hello-inertia" | bash
```

```
cd hello-inertia
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
sail up
```

```
sail php artisan migrate
```

```
sail composer require laravel/breeze --dev
```

```
sail php artisan breeze:install
```

I simply selected them.
```
React with Inertia
Inertia SSR
PHPUnit
```

```
sail php artisan migrate
sail npm install
sail npm run dev
```

