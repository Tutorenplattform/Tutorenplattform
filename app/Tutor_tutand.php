<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tutor_tutand extends Model
{
    /*
     * Primary key
     * @var int
     */
    protected $pk_tutor_tutand_id;

    /*
     * vorname
     * @var string
     */
    protected $vorname;

    /*
     * nachname
     * @var string
     */
    protected $nachname;

    /*
     * moodle_benutzername
     * @var string
     */
    protected $moodle_benutzername;

    /*
     * isTutor
     * @var bool
     */
    protected $isTutor;

    /*
     * bevorzugte_zeiten
     * @var string
     */
    protected $bevorzugte_zeiten;

    /*
     * bevorzugte_orte
     * @var string
     */
    protected $bevorzugte_orte;

    /*
     * klasse
     * @var string
     */
    protected $klasse;

    /*
     * email_adresse
     * @var string
     */
    protected $email_adresse;

    /*
     * telefon_nr
     * @var string
     */
    protected $telefon_nr;

    /*
     * klassenvorstand
     * @var string
     */
    protected $klassenvorstand;

    public function fach(){
        return $this->hasMany('App\Fach');
    }

    public function bewertung(){
        return $this->belongsToMany('App\Bewertung');
    }





}
