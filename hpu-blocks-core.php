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
 * Text Domain:       hpu-blocks-core
 *
 * @package           hpu-blocks-core
 */

/****************************************************************************************************************
 *     __  __     ______   __  __        ______     __         ______     ______     __  __     ______          *
 *    /\ \_\ \   /\  == \ /\ \/\ \      /\  == \   /\ \       /\  __ \   /\  ___\   /\ \/ /    /\  ___\         *
 *    \ \  __ \  \ \  _-/ \ \ \_\ \     \ \  __<   \ \ \____  \ \ \/\ \  \ \ \____  \ \  _"-.  \ \___  \        *
 *     \ \_\ \_\  \ \_\    \ \_____\     \ \_____\  \ \_____\  \ \_____\  \ \_____\  \ \_\ \_\  \/\_____\       *
 *      \/_/\/_/   \/_/     \/_____/      \/_____/   \/_____/   \/_____/   \/_____/   \/_/\/_/   \/_____/       *
 *                                                                                                              *
 ****************************************************************************************************************/

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * This plugin was built for High Point University to add custom variations of core WordPress blocks.
 * It is not intended to be used outside of the HPU web ecosystem.
 * 
 * @since 0.1.0
 * 
 */

function hpu_blocks_core_activation()
{
	if (version_compare(get_bloginfo('version'), '6.1', '<')) {
		wp_die(
			'<p>' . __('This plugin requires WordPress 6.1 or higher.', 'hpu-blocks-core') . '</p>',
			__('Plugin Activation Error', 'hpu-blocks-core'),
			array('back_link' => true)
		);
	}
}
register_activation_hook(__FILE__, 'hpu_blocks_core_activation');

function hpu_blocks_core_enqueue_block_assets()
{
	// load the webpacked js file
	wp_enqueue_script(
		'hpu-blocks-core',
		plugins_url('build/index.js', __FILE__),
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components'),
		filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
	);

	// load the webpacked css file
	wp_enqueue_style(
		'hpu-blocks-core',
		plugins_url('build/style-index.css', __FILE__),
		array('wp-edit-blocks'),
		filemtime(plugin_dir_path(__FILE__) . 'build/style-index.css')
	);
}
add_action('enqueue_block_assets', 'hpu_blocks_core_enqueue_block_assets');


function hpu_blocks_core_register_block_category($block_categories, $post_type)
{
	// bail early if not in the block editor
	if ($post_type !== 'page') {
		return $block_categories;
	}

	// part of the larger HPU web ecosystem
	$hpu_blocks_category = array(
		'slug' => 'hpu-blocks',
		'title' => __('HPU Blocks', 'hpu-blocks'),
		'icon' => 'admin-site',
	);
	array_unshift($block_categories, $hpu_blocks_category);

	return $block_categories;
}
add_filter('block_categories_all', 'hpu_blocks_core_register_block_category', 10, 2);
