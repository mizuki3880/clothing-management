<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\ListController;

Route::get('/', function () {
    return view('welcome');
});

// Route::group(['middleware' => ['api']], function() {
//   Route::get('users', [ListController::class, 'index']);
// });
