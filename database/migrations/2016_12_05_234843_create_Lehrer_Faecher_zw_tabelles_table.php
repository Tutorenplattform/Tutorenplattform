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
        Schema::create('lehrer_Faecher_zw_tabelles', function (Blueprint $table){

            $table->increments('pk_id');

            $table->integer('letzte_zeugnisnote');

            $table->text('anmerkung_faehigkeiten');

            $table->integer('fk_pk_tutor_tutand_id')->unsigned();

            $table->foreign('fk_pk_tutor_tutand_id')
                ->references('pk_tutor_tutand_id')->on('tutor_tutands')
                ->onDelete('cascade');

            $table->integer('fk_pk_lehrer_id')->unsigned();

            $table->foreign('fk_pk_lehrer_id')
                ->references('pk_lehrer_id')->on('lehrers')
                ->onDelete('cascade');

            $table->integer('fk_pk_fach_id')->unsigned();

            $table->foreign('fk_pk_fach_id')
                ->references('pk_fach_id')->on('faches')
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
        Schema::dropIfExists('lehrer_Faecher_zw_tabelles');
    }
}
