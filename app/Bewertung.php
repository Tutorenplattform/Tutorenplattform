<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bewertung extends Model
{
    /**
     * primary key
     * @var integer
     */
    protected $pk_bewertung_id;

    /**
     * bewertung
     * @var string
     */
    protected $bewertung;

    public function tutor_tutand(){
        return $this->belongsToMany('App\Tutor_tutand');
    }
}
