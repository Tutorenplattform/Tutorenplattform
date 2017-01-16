<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMeldungsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meldungs', function (Blueprint $table){

            $table->increments('pk_id');

            $table->string('kommentar', 500);

            $table->integer('fk_pk_melder')->unsigned();

            $table->foreign('fk_pk_melder')
                ->references('pk_tutor_tutand_id')->on('tutor_tutands')
                ->onDelete('cascade');

            $table->integer('fk_pk_gemeldeter')->unsigned();

            $table->foreign('fk_pk_gemeldeter')
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
        Schema::dropIfExists('meldungs');
    }
}
