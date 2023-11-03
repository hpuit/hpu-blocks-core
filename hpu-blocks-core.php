<?php

/**
 * Plugin Name:       HPU Blocks Core
 * Description:       Adds custom variations of core blocks.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            HPU Web Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hpu-blocks
 *
 * @package           hpu-blocks-core
 */

/****************************************************************************************************************
 *     __  __     ______   __  __        ______     __         ______     ______     __  __     ______          *
 *    /\ \_\ \   /\  == \ /\ \/\ \      /\  == \   /\ \       /\  __ \   /\  ___\   /\ \/ /    /\  ___\         *
 *    \ \  __ \  \ \  _-/ \ \ \_\ \     \ \  __<   \ \ \____  \ \ \/\ \  \ \ \____  \ \  _'-.  \ \___  \        *
 *     \ \_\ \_\  \ \_\    \ \_____\     \ \_____\  \ \_____\  \ \_____\  \ \_____\  \ \_\ \_\  \/\_____\       *
 *      \/_/\/_/   \/_/     \/_____/      \/_____/   \/_____/   \/_____/   \/_____/   \/_/\/_/   \/_____/       *
 *                                                                                                              *
 ****************************************************************************************************************/

//Exit if accessed directly.
defined('ABSPATH') || exit;

// Define constants.
define('HPU_BLOCKS_CORE_VERSION', '0.1.0');
define('HPU_BLOCKS_CORE_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('HPU_BLOCKS_CORE_PLUGIN_URL', plugin_dir_url(__FILE__));

// runs when the plugin is activated
register_activation_hook(__FILE__, 'hpu_blocks_core_activate');

function hpu_blocks_core_activate(){

	// check for wp ver 6.1 or greater
	if (version_compare(get_bloginfo('version'), '6.1', '<')) {
		wp_die('You must update WordPress to use this plugin.');
	}
}

// runs on plugin deactivation
register_deactivation_hook(__FILE__, 'hpu_blocks_core_deactivate');

function hpu_blocks_core_deactivate(){

}

// Register block categories.
add_filter('block_categories_all', 'hpu_blocks_core_register_block_category', 10, 2);

function hpu_blocks_core_register_block_category($categories)
{
	global $post;

	if ($post->post_type !== 'post' && $post->post_type !== 'page') {
		return $categories;
	} else {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'hpu-blocks',
					'title' => __('HPU Blocks', 'hpu-blocks'),
				),
			)
		);
		echo 'category added';
	}
}

// Register block styles.
add_action('enqueue_block_assets', 'hpu_blocks_core_register_block_styles');

function hpu_blocks_core_register_block_styles()
{
	wp_enqueue_style(
		'hpu-blocks-core-editor-styles',
		HPU_BLOCKS_CORE_PLUGIN_URL . 'build/style-index.css',
		array('wp-edit-blocks'),
		HPU_BLOCKS_CORE_VERSION
	);
}

// Register block scripts.
add_action('enqueue_block_editor_assets', 'hpu_blocks_core_register_block_scripts');

function hpu_blocks_core_register_block_scripts()
{
	wp_enqueue_script(
		'hpu-blocks-core-editor-scripts',
		HPU_BLOCKS_CORE_PLUGIN_URL . 'build/index.js',
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components'),
		HPU_BLOCKS_CORE_VERSION
	);
}

// Register init
add_action('init', 'hpu_blocks_core_register_init');

function hpu_blocks_core_register_init()
{
	// Register block styles.
	wp_register_style(
		'hpu-blocks-core-styles',
		HPU_BLOCKS_CORE_PLUGIN_URL . 'build/style-index.css',
		array('wp-edit-blocks'),
		HPU_BLOCKS_CORE_VERSION
	);

	// Register block scripts.
	wp_register_script(
		'hpu-blocks-core-scripts',
		HPU_BLOCKS_CORE_PLUGIN_URL . 'build/index.js',
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components'),
		HPU_BLOCKS_CORE_VERSION
	);
}