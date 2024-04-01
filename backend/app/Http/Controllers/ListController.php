<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListController extends Controller
{
    public function index(){
        return response()->json(
            [
                [
                    "id" => 1,
                    "title" => "タイトルです",
                    "content" => "投稿内容です投稿内容です投稿内容です投稿内容です投稿内容です。"
                ],
                [
                    "id" => 2,
                    "title" => "タイトルです",
                    "content" => "投稿内容です投稿内容です投稿内容です投稿内容です投稿内容です。"
                ],
                [
                    "id" => 3,
                    "title" => "タイトルです",
                    "content" => "投稿内容です投稿内容です投稿内容です投稿内容です投稿内容です。"
                ],
            ],
            200, // HTTPステータスコード
            [], // ヘッダー
            JSON_UNESCAPED_UNICODE // オプション
        );
    }    
}
