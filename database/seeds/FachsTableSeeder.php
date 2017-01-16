<?php

use Illuminate\Database\Seeder;

use App\Fach;

class FachsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Fach::class, 50)->create();
    }
}
