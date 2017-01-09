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

    public function lehrer_faecher_zw_tabelle(){
        return $this->belongsToMany('App\Lehrer_Faecher_zw_tabelle');
    }
}
