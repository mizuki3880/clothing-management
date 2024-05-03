<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function authenticate(Request $request){
        $credentials = $request->only('username', 'password');
        
        $user= User::where('username', $credentials['username'])->first();
        
        if($user && Hash::check($credentials["password"], $user->password)){
            return response()->json($user);
            
        }else{
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }

}
