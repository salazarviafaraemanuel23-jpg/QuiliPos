<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\SyncController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\ReportController;
use Illuminate\Support\Facades\Route;

// Authentication (rate limited)
Route::middleware('throttle:10,1')->group(function () {
    Route::post('/auth/login', [AuthController::class, 'login']);
    Route::post('/auth/register', [AuthController::class, 'register']);
});

Route::post('/auth/logout', [AuthController::class, 'logout'])
    ->middleware(['auth:sanctum', 'throttle:30,1']);

// Public health check
Route::get('/sync/health', [SyncController::class, 'healthCheck']);

// Sync endpoints (authenticated)
Route::middleware(['auth:sanctum', 'throttle:60,1'])->group(function () {
    Route::get('/sync/verify', [SyncController::class, 'verify']);
    Route::get('/sync', [SyncController::class, 'fetch']);
    Route::post('/sync/sales', [SyncController::class, 'pushSales']);
});

// Sales endpoint (authenticated) - handles both API and Inertia
Route::middleware(['auth:sanctum', 'throttle:60,1'])->group(function () {
    Route::get('/sales', [SaleController::class, 'index']);
    Route::get('/sales/{id}/receipt', [SaleController::class, 'receipt']);
    Route::post('/getorderdetails/{type}', [ReportController::class, 'viewOrderDetails']);
});

// Get authenticated user
Route::get('/user', function (\Illuminate\Http\Request $request) {
    return $request->user();
})->middleware(['auth:sanctum', 'throttle:60,1']);
