<?php
/**
 * Plugin Name: WordPress Vue Counter Plugin
 * Description: A demo on how to use a Vue 3 counter application in WordPress.
 */

// Register scripts and styles
function func_load_vuescripts() {
    // Register Vue 3 (global build)
    wp_register_script('vue', 'https://unpkg.com/vue@3/dist/vue.global.prod.js', [], null, true);
    // Register your custom Vue code
    wp_register_script('my_app', plugin_dir_url(__FILE__) . 'app.js', ['vue'], null, true);
    // Register CSS
    wp_register_style('my_css', plugin_dir_url(__FILE__) . 'style.css');
}

// Enqueue scripts and styles
add_action('wp_enqueue_scripts', 'func_load_vuescripts');

// Return string for shortcode
function func_wp_vue() {
    // Enqueue Vue.js and custom script
    wp_enqueue_script('vue');
    wp_enqueue_script('my_app');
    // Enqueue CSS
    wp_enqueue_style('my_css');

    // Capture the template content
    ob_start();
    include plugin_dir_path(__FILE__) . 'templates.php';
    $template_content = ob_get_clean();

    // Return HTML with Vue mount point and template content
    return '<div id="app"></div>' . $template_content;
}

// Add shortcode to WordPress
add_shortcode('vue-counter', 'func_wp_vue');
