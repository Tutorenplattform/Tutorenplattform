<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lehrer_Faecher_zw_tabelle extends Model
{

    /**
     * primary key
     * @var integer
     */
    protected $pk_id;

    /**
     * letzte Zeugnisnote
     * @var integer
     */
    protected $letzte_zeugnisnote;

    /**
     * faehigkeiten anmerkung
     * @var string
     */
    protected $anmerkung_faehigkeiten;

    public function lehrer(){
        return $this->belongsToMany('App\Lehrer');
    }

    public function fach(){
        return $this->belongsToMany('App\Fach');
    }

    public function tutor_tutand(){
        return $this->belongsToMany('App\Tutor_tutand');
    }

}
