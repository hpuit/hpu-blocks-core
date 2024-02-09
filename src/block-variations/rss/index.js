import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editRss } from './edit';

export default function HPURss() {
    const withCustomEditRss = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/rss') {
                return editRss(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-rss',
        withCustomEditRss
    );
}