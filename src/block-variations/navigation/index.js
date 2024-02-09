import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editNavigation } from './edit';

export default function HPUNavigation() {
    const withCustomEditNavigation = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/navigation') {
                return editNavigation(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-navigation',
        withCustomEditNavigation
    );
}