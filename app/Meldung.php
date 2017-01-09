<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meldung extends Model
{

    /**
     * primary key
     * @var integer
     */
    protected $pk_id;

    /*
     * name
     * @var string
     */
    protected $kommentar;

    public function tutor_tutand(){
        return $this->belongsTo('App\Tutor_tutand');
    }


}
