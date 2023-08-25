# Hello Inertia 1.x

This is a sample application to develop Laravel 10.x, Inertia 1.x, React 18.x and Vite 4.x. I have deployed this application on my VPS with SSR.

demo: [https://hello-inertia.pandora.nohaco.com](https://hello-inertia.pandora.nohaco.com)

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

Don't be afraid, it doesn't need any option. It's interactive.

## What's difference between Inertia 0.x and 1.x?

### Renamed import

Inertia 0.x
```
import { Link } from @inertiajs/inertia-react
```

Inertia 1.x
```
import { Link } from @inertiajs/react
```

[https://inertiajs.com/upgrade-guide](https://inertiajs.com/upgrade-guide)

## How to use SSR

I used pm2

```
npm i -g pm2
pm2 start bootstrap/ssr/ssr.js -n hello_inertia -i 1
```

[https://pm2.keymetrics.io](https://pm2.keymetrics.io)
