<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Meldung::class, function (Faker\Generator $faker) {
    return [
        'kommentar' => $faker->sentence(5),
    ];
});

$factory->define(App\Lehrer_Faecher_zw_tabelle::class, function (Faker\Generator $faker) {
    return [
        'letzte_zeugnisnote' => $faker->sentence(5),
        'anmerkung_faehigkeiten' => $faker->sentence(5),
    ];
});