<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CretaeBewertungsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bewertungs', function (Blueprint $table){

            $table->increments('pk_bewertung_id');

            $table->string('bewertung', 500);

            $table->integer('fk_pk_tutor_id_bewerter')->unsigned();

            $table->foreign('fk_pk_tutor_id_bewerter')
                ->references('pk_tutor_tutand_id')->on('tutor_tutands')
                ->onDelete('cascade');

            $table->integer('fk_pk_tutor_id_bewerteter')->unsigned();

            $table->foreign('fk_pk_tutor_id_bewerteter')
                ->references('pk_tutor_tutand_id')->on('tutor_tutands')
                ->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bewertungs');
    }
}
