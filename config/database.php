<?php

use Illuminate\Support\Str;

/**
 * Parse DATABASE_URL into discrete fields. We intentionally avoid passing the
 * raw URL to Laravel because libpq "options=endpoint=..." query params would
 * overwrite PDO connection options and break array_diff_key in the connector.
 */
$pgsqlFromUrl = (function (): array {
    $databaseUrl = env('DATABASE_URL', env('DB_URL'));

    if (! $databaseUrl) {
        return [];
    }

    $normalized = str_replace('postgresql://', 'postgres://', $databaseUrl);
    $parsed = parse_url($normalized);

    if ($parsed === false) {
        return [];
    }

    parse_str($parsed['query'] ?? '', $query);

    $host = $parsed['host'] ?? null;
    $port = $parsed['port'] ?? null;
    $database = isset($parsed['path']) && $parsed['path'] !== '/'
        ? ltrim($parsed['path'], '/')
        : null;
    $username = isset($parsed['user']) ? rawurldecode($parsed['user']) : null;
    $password = isset($parsed['pass']) ? rawurldecode($parsed['pass']) : null;
    $sslmode = $query['sslmode'] ?? null;

    $neonEndpoint = null;

    if (isset($query['options'])) {
        $libpqOptions = rawurldecode((string) $query['options']);

        if (preg_match('/endpoint[=]([^&]+)/', $libpqOptions, $matches)) {
            $neonEndpoint = $matches[1];
        }
    }

    if ($neonEndpoint === null && $host !== null && str_contains($host, 'neon.tech')) {
        $endpointId = explode('.', $host)[0] ?? '';
        $neonEndpoint = preg_replace('/-pooler$/', '', $endpointId) ?: null;
    }

    return array_filter([
        'host' => $host,
        'port' => $port,
        'database' => $database,
        'username' => $username,
        'password' => $password,
        'sslmode' => $sslmode,
        'neon_endpoint' => $neonEndpoint,
    ], fn ($value) => $value !== null && $value !== '');
})();

return [

    /*
    |--------------------------------------------------------------------------
    | Default Database Connection Name
    |--------------------------------------------------------------------------
    */

    'default' => env('DB_CONNECTION', 'pgsql'),

    /*
    |--------------------------------------------------------------------------
    | Database Connections
    |--------------------------------------------------------------------------
    */

    'connections' => [

        'sqlite' => [
            'driver' => 'sqlite',
            'url' => env('DB_URL'),
            'database' => env('DB_DATABASE', database_path('database.sqlite')),
            'prefix' => '',
            'foreign_key_constraints' => env('DB_FOREIGN_KEYS', true),
            'busy_timeout' => null,
            'journal_mode' => null,
            'synchronous' => null,
        ],

        'mysql' => [
            'driver' => 'mysql',
            'url' => env('DB_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'laravel'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => env('DB_CHARSET', 'utf8mb4'),
            'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
            'prefix' => '',
            'prefix_indexes' => true,
            'strict' => true,
            'options' => [],
        ],

        'mariadb' => [
            'driver' => 'mariadb',
            'url' => env('DB_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'laravel'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => env('DB_CHARSET', 'utf8mb4'),
            'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
            'prefix' => '',
            'prefix_indexes' => true,
            'strict' => true,
            'options' => [],
        ],

        'pgsql' => array_merge([
            'driver' => 'pgsql',
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '5432'),
            'database' => env('DB_DATABASE', 'laravel'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => env('DB_CHARSET', 'utf8'),
            'prefix' => '',
            'prefix_indexes' => true,
            'search_path' => 'public',
            'sslmode' => env('DB_SSLMODE', 'require'),
            'options' => extension_loaded('pdo_pgsql') ? array_filter([
                // Native prepares required so PostgreSQL receives true/false, not 1/0
                PDO::ATTR_EMULATE_PREPARES => false,
            ]) : [],
        ], $pgsqlFromUrl),

        'sqlsrv' => [
            'driver' => 'sqlsrv',
            'url' => env('DB_URL'),
            'host' => env('DB_HOST', 'localhost'),
            'port' => env('DB_PORT', '1433'),
            'database' => env('DB_DATABASE', 'laravel'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => env('DB_CHARSET', 'utf8'),
            'prefix' => '',
            'prefix_indexes' => true,
        ],

    ],

    'migrations' => [
        'table' => 'migrations',
        'update_date_on_publish' => true,
    ],

    'redis' => [

        'client' => env('REDIS_CLIENT', 'phpredis'),

        'options' => [
            'cluster' => env('REDIS_CLUSTER', 'redis'),
            'prefix' => env('REDIS_PREFIX', Str::slug(env('APP_NAME', 'laravel'), '_').'_database_'),
        ],

        'default' => [
            'url' => env('REDIS_URL'),
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'username' => env('REDIS_USERNAME'),
            'password' => env('REDIS_PASSWORD'),
            'port' => env('REDIS_PORT', '6379'),
            'database' => env('REDIS_DB', '0'),
        ],

        'cache' => [
            'url' => env('REDIS_URL'),
            'host' => env('REDIS_HOST', '127.0.0.1'),
            'username' => env('REDIS_USERNAME'),
            'password' => env('REDIS_PASSWORD'),
            'port' => env('REDIS_PORT', '6379'),
            'database' => env('REDIS_CACHE_DB', '1'),
        ],

    ],

];
