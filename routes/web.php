<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});


Route::group(['prefix' => 'api/v1'], function() {

    Route::get('tutors/{id}/rate', function ($id) {

        $bewertung = App\Bewertung::find($id);


        $bewertung->bewertung = "aus post request";

        $bewertung->save();

        return http_response_code(200);

    });


    Route::get('tutors/{id}/rating', function ($id) {

        $bewertung = App\Bewertung::find($id);

        return $bewertung->bewertung;

    });


    Route::get('tutors', function (Request $request) {

        $url = $request->fullUrl();

        $parts = parse_url($url);

        parse_str($parts['query'], $query);

        $name_variable = $query['name'];
        $klasse_variable = $query['klasse'];
        $fach_variable = $query['fach'];

        return "[{}{}]";

    });





});

