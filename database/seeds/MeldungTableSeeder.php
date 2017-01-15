<?php

use Illuminate\Database\Seeder;

class MeldungTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Meldung::class, 20)->create();
    }
}
