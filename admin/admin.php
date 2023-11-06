<?php

/*
* Plugin Name:       HPU Blocks Core
* Description:       Adds custom variations of core blocks.
* Requires at least: 6.1
* Requires PHP:      7.0
* Version:           0.9.0
*
* @package           hpu-blocks-core
*/

//include updater
require_once plugin_dir_path(__FILE__) . 'updater.php';

// function to add a new item to the wp admin menu
function hpu_blocks_core_admin_menu()
{
    //exit early if the user can't manage options
    if (!current_user_can('manage_options')) {
        return;
    }

    // add the top-level admin menu only if it doesn't already exist
    if (menu_page_url('hpu-blocks-core', false) === false) {
        return;
    } else {
        add_menu_page(
            'HPU Blocks Core',
            'HPU Blocks Core',
            'manage_options',
            'hpu-blocks-core',
            'hpu_blocks_core_admin_page',
            'dashicons-layout',
            100
        );
    }
    
}
add_action('admin_menu', 'hpu_blocks_core_admin_menu');

// function to display the admin page
function hpu_blocks_core_admin_page()
{
    //import the admin page html
    require_once plugin_dir_path(__FILE__) . 'admin-page.php';

}
add_action('admin_init', 'hpu_blocks_core_admin_page');

// enqueue the admin styles
function hpu_blocks_core_admin_styles()
{
    wp_enqueue_style('hpu-blocks-core-admin-styles', plugin_dir_url(__FILE__) . 'admin.css', array(), '0.9.0', 'all');
}