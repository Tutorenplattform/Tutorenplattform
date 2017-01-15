<?php

use Illuminate\Database\Seeder;

class Lehrer_Faecher_zw_tabelleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Lehrer_Faecher_zw_tabelle::class, 20)->create();
    }
}
