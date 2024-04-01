<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ListController;

Route::group(['middleware' => ['api']], function() {
    Route::get('users', [ListController::class, 'index']);
});