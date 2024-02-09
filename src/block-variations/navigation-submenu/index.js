import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editNavigationSubmenu } from './edit';

export default function HPUNavigationSubmenu() {
    const withCustomEditNavigationSubmenu = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/navigation-submenu') {
                return editNavigationSubmenu(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-navigation-submenu',
        withCustomEditNavigationSubmenu
    );
}