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

use Illuminate\Http\Request;

Route::get('/', function () {
    return view('index');
});


Route::group(['prefix' => 'api/v1'], function() {

    Route::post('subjects', 'appController@insertFach');

    Route::delete('subjects/{id}', 'appController@destroyFach');

    Route::delete('tutands/{id}', 'appController@destroyTutand');

    Route::post('tutors/{id}/report', 'appController@reportBenutzer');

    Route::post('tutors/{id}/rate', 'appController@bewertungAbgeben');

    Route::post('tutors/{id}/ignore', 'appController@ignore');


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

    Route::get('tutors/{id}', function ($id) {
        return App\Tutor_tutand::find($id);
    });

    Route::put('tutors/{id}', function (Request $request, $id) {
        App\Tutor_tutand::find($id)->update($request->all());
    });

    Route::get('tutors/reported', function () {
        return App\Meldung::all();
    });

    Route::get('tutors/{id}/disable', function ($id) {
        App\Tutor_tutand::find($id)->update(array('isDeaktiviert' => true));
    });

    Route::get('tutands', function ($id) {
        return App\Tutor_tutand::where('isTutor', false)->get();
    });

    Route::get('tutand/{id}', function ($id) {
        return App\Tutor_tutand::find($id);
    });

    /**
     * 2.3.9 Benutzer löschen
     */
    Route::delete('tutors/{id}', function ($id){
        App\Tutor_tutand::destroy($id);

        return http_response_code(200);
    });

    /**
     * 2.3.10 Lehrerliste
     */
    Route::get('tutors/teachers', function(){
        return App\Lehrer::all();
    });

    /**
     * 2.3.18 Administratoren anzeigen
     */
    Route::get('admin', function(){
        return App\Admin::all();
    });

    /**
     * 2.3.19 Administrator erstellen
     */
    Route::post('admin', function(Request $request){
        App\Admin::create($request->all());
        return http_response_code(200);
    });

    /**
     * 2.3.20
     */
    Route::get('subjects', function(){
       return App\Fach::all();
    });
});

