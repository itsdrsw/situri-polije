<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing/Index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//SECTION -  - User Auth Routes

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/deteksi', function () {
        return Inertia::render('Landing/Deteksi');
    })->name('deteksi');

    Route::get('/riwayat', function () {
        return Inertia::render('Landing/Riwayat');
    })->name('riwayat');
});

//SECTION - - End User Auth Routes

Route::get('/kontak', function () {
    return Inertia::render('Landing/Kontak');
})->name('kontak');

require __DIR__ . '/auth.php';
