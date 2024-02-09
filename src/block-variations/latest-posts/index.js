import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editLatestPosts } from './edit';

export default function HPULatestPosts() {
    const withCustomEditLatestPosts = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/latest-posts') {
                return editLatestPosts(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-latest-posts',
        withCustomEditLatestPosts
    );
}