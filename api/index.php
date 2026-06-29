<?php

/**
 * Vercel serverless entrypoint — forwards all requests to Laravel's public front controller.
 */
error_reporting(E_ALL & ~E_DEPRECATED & ~E_USER_DEPRECATED);

require __DIR__ . '/../public/index.php';
