<?php

/**
 * Plugin Name:       HPU Blocks Core
 * Description:       Adds custom variations of core blocks.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.9.0
 * Author:            HPU Web Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hpu-blocks
 *
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
define('HPU_BLOCKS_CORE_VERSION', '0.9.0');
define('HPU_BLOCKS_CORE_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('HPU_BLOCKS_CORE_PLUGIN_URL', plugin_dir_url(__FILE__));

//include admin files
require_once HPU_BLOCKS_CORE_PLUGIN_DIR . 'admin/admin.php';

// runs when the plugin is activated
register_activation_hook(__FILE__, 'hpu_blocks_core_activate');
function hpu_blocks_core_activate()
{
	// check for wp ver 6.1 or greater
	if (version_compare(get_bloginfo('version'), '6.1', '<')) {
		wp_die('You must update WordPress to use this plugin.');
	}
}

// runs on plugin deactivation
register_deactivation_hook(__FILE__, 'hpu_blocks_core_deactivate');
function hpu_blocks_core_deactivate()
{
}

// Register block categories.
add_filter('block_categories_all', 'hpu_blocks_core_register_block_category', 10, 2);
function hpu_blocks_core_register_block_category($categories)
{
	// Get the current post type
	global $post;

	// If the post type is not post or page, return the default categories
	if ($post->post_type !== 'post' && $post->post_type !== 'page') {
		return $categories;
	} else { // Otherwise, add the custom category
		$categories = array_merge(
			array(
				array(
					'slug'  => 'hpu-blocks',
					'title' => __('HPU Blocks', 'hpu-blocks'),
				),
			),
			$categories,
		);
		// error_log('Categories: ' . print_r($categories, true));
		return array_values($categories);
	}
}

// Register block styles.
add_action('enqueue_block_assets', 'enqueue_hpu_blocks_core_editor_styles');
function enqueue_hpu_blocks_core_editor_styles()
{
	wp_enqueue_style(
		'hpu-blocks-core-editor-styles',
		HPU_BLOCKS_CORE_PLUGIN_URL . 'build/style-index.css',
		HPU_BLOCKS_CORE_VERSION
	);
}

// Register block scripts.
add_action('enqueue_block_editor_assets', 'hpu_blocks_core_register_block_scripts');
function hpu_blocks_core_register_block_scripts()
{
	$assets = include(HPU_BLOCKS_CORE_PLUGIN_DIR . 'build/index.asset.php');


	if (!is_array($assets) || !isset($assets['dependencies'])) {
		error_log('Failed to load index.asset.php');
	} else {
		wp_enqueue_script(
			'hpu-blocks-core-editor-scripts',
			HPU_BLOCKS_CORE_PLUGIN_URL . 'build/index.js',
			$assets['dependencies'],
			HPU_BLOCKS_CORE_VERSION,
			array('strategy' => 'defer'), // Load the script after the DOM tree has been constructed
			// error_log(HPU_BLOCKS_CORE_PLUGIN_DIR)
		);
	}
}
function hpu_eneueue_block_assets() {
	$blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
	$block_names = array_map(function($block) {
		return $block->name;
	}, $blocks);
	//$block_names = json_encode($block_names);
	foreach($blocks as $block) {
		$src = plugin_dir_url(__FILE__) . '/build/style-index.css';
		if ( is_admin() ) {
			$src = plugin_dir_url(__FILE__) . '/build/index.css';
		}
		wp_enqueue_block_style(
			$block,
			array(
				'handle' => 'hpu-blocks-core-editor-styles',
				'src' => $src,
			),
		);
	}
}
add_action('after_setup_theme', 'hpu_eneueue_block_assets');
// Register init
add_action('init', 'hpu_blocks_core_register_init');
function hpu_blocks_core_register_init()
{
}
