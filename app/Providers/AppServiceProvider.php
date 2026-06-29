<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Opcodes\LogViewer\Facades\LogViewer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Blade;
use App\Models\Setting;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        // Initialize analytics tracking
        Blade::directive('init', function () {
            return config('init');
        });

        LogViewer::auth(function ($request) {
            /** @var \App\Models\User */
            $user = Auth::user();
            return $user && $user->hasRole('super-admin');
        });

        // Mail settings are loaded lazily when needed — avoid DB calls during
        // serverless cold starts before migrations have run.
    }
}
