<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOperationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('operators',function(Blueprint $table){
            $table->increments('pk_tutor_id');
            $table->string('vorname', 255);
            $table->string('nachname', 255);
            $table->string('moodle_benutzername');
            $table->boolean('isTutor');
            $table->text('bevorzugte_zeiten');
            $table->text('bevorzugte_orte');
            $table->string('klasse',255);
            $table->string('email_adresse',500);
            $table->string('telefon_nr',500);
            $table->string('klassenvorstand',255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('operators');
    }
}
