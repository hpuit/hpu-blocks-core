import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostNavigationLink } from './edit';

export default function HPUPostNavigationLink() {
    const withCustomEditPostNavigationLink = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-navigation-link') {
                return editPostNavigationLink(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-navigation-link',
        withCustomEditPostNavigationLink
    );
}