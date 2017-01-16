<?php

use Illuminate\Database\Seeder;
use App\Lehrer;

class LehrersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Lehrer::class, 50)->create();
    }
}
