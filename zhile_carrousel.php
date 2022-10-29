<?php
/**
 * package Carrousel 
 * version 1.0.0
 */
/*
Plugin Name: ZHILE_carrousel 
version 1.0.0
*/
/*
filemtime()  // retourne en milliseconde le temps de la dernière sauvegarde
plugin_dir_path() // retourne le chemin du répertoire du plugin
__FILE__ // le fichier en train de s'exécuter
wp_enqueue_style() // Intègre le link:css dans la page
wp_enqueue_script() // intègre le script dans la page
wp_enqueue_scripts // le hook
*/

function zhilec_enqueue() {
    $version_css = filemtime(plugin_dir_path(__FILE__)."style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__)."js/carrousel.js");

    wp_enqueue_style("zhilec_style_carrousel",
                        plugin_dir_url(__FILE__)."style.css",
                        array(),
                        $version_css,
                        false);

    wp_enqueue_script("zhilec_js_carrousel",
    plugin_dir_url(__FILE__)."js/carrousel.js",
    array(),
    $version_js,
    true);
}

add_action('wp_enqueue_scripts', 'zhilec_enqueue');

function genere_boite(){
    $contenu = 
    /*" <style>
    .carrousel{
        border: 2px solid #aaa;
        background-color: #0f0;
        width: 200px;
        height: 200px;
    }
    </style>"*/
    "<button class='btn_modale'>boite modale</button>
    <div class='carrousel'>
    <div class='fleche fleche__gauche'> </div>
    <div class='fleche fleche__droite'> </div>
    <button class='btn_fermer'>x</button>
    <figure class='carrousel__figure'></figure>
    <form class='carrousel__form'><form>
    </div>";
    return $contenu;
}
add_shortcode('zhile_carrousel', 'genere_boite');