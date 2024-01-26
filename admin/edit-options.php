<?php

class EditorOptionsRestriction {
    public function __construct() {
        add_action('admin_init', array($this, 'restrict_editor_options'));
    }

    public function restrict_editor_options() {
        if (!current_user_can('activate_plugins')) {
            add_filter('tiny_mce_before_init', array($this, 'remove_editor_options'));
        }
    }

    public function remove_editor_options($settings) {
        $restricted_options = array(
            'colorpicker',
            'fontselect',
            'fontsizeselect',
            'padding',
            'margin',
            'width',
            'align',
            'justify'
        );

        foreach ($restricted_options as $option) {
            unset($settings['toolbar1'], $option);
        }

        return $settings;
    }
}

new EditorOptionsRestriction();
