import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editShortcode } from './edit';

export default function HPUShortcode() {
    const withCustomEditShortcode = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/shortcode') {
                return editShortcode(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-shortcode',
        withCustomEditShortcode
    );
}