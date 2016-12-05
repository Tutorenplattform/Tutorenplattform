<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lehrer extends Model
{
    /*
    * Primary key
    * @var int
    */
    protected $pk_fach_id;

    /*
     * name
     * @var string
     */
    protected $name;

    /*
     * letzte_zeugnisnote
     * @var int
     */
    protected  $letzte_zeugnisnote;

    /*
     * faehigkeiten_anmerkung
     * @var string
     */
    protected $faehigkeiten_anmerkung;


    public function fach(){
        return $this->belongsToMany('App\Fach');
    }

}
