<?php

$frontendUrl = env('FRONTEND_URL', env('APP_URL', 'http://localhost'));

return [

    'paths' => ['laravel-api/*', 'sanctum/csrf-cookie', 'login', 'logout', 'register', 'forgot-password', 'reset-password/*'],

    'allowed_methods' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

    'allowed_origins' => array_values(array_filter(array_unique([
        $frontendUrl,
        env('APP_URL'),
    ]))),

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['Content-Type', 'X-Requested-With', 'Authorization', 'Accept', 'X-XSRF-TOKEN', 'X-Inertia', 'X-Inertia-Version'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,

];
