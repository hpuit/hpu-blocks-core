import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editHomeLink } from './edit';

export default function HPUHomeLink() {
    const withCustomEditHomeLink = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/home-link') {
                return editHomeLink(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-home-link',
        withCustomEditHomeLink
    );
}