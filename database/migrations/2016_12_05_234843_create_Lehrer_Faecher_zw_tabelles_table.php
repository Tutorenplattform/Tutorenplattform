<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLehrerFaecherZwTabellesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Lehrer_Faecher_zw_tabelles', function (Blueprint $table){

            $table->increments('pk_id');

            $table->integer('letzte_zeugnisnote');

            $table->text('anmerkung_faehigkeiten');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Lehrer_Faecher_zw_tabelles');
    }
}
