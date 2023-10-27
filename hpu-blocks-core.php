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

/**
 * Activates the HPU Blocks Core plugin and checks if the WordPress version is compatible.
 *
 * @return void
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

/**
 * Enqueues the assets for the HPU Blocks Core plugin.
 *
 * This function loads the webpacked js and css files for the plugin.
 *
 * @since 1.0.0
 */
function hpu_blocks_core_enqueue_block_assets()
{
	// load the webpacked js file
	wp_enqueue_script(
		'hpu-blocks-core',
		plugins_url('build/index.js', __FILE__),
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components', 'wp-domReady'),
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

/**
 * Adding a new (custom) block category.
 *
 * @param array $categories Array of block categories.
 * @param object $post Post object.  
 * 
 * */
function hpu_blocks_core_add_new_block_category($categories, $post)
{
	$hpu_blocks_category = array(
		'slug'  => 'hpu-blocks',
		'title' => esc_html__('HPU Blocks', 'hpu-blocks'),
	);
	// Check the context of this filter, return default if not in the post/page block editor.
	// Alternatively, use this check to add custom categories to only the customizer or widget screens.
	if (!(isset($post) && ($post->post_type === 'post' || $post->post_type === 'page'))) {
		return $categories;
	}

	if (!in_array($hpu_blocks_category, $categories)) {
		return array_merge(
			$categories,
			$hpu_blocks_category
		);
	}
}
add_filter('block_categories_all', 'hpu_blocks_core_add_new_block_category');
