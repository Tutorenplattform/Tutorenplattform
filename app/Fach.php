<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fach extends Model
{
    /**
     * primary key
     * @var integer
     */
    protected $pk_fach_id;

    /**
     * Name
     * @var string
     */
    protected $name;

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

    public function tutor_tutand(){
        return $this->belongsTo('App\Tutor_tutand');
    }

    public function lehrer(){
        return $this->belongsTo('App\Lehrer');
    }
}
