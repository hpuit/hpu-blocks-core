import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editQueryTitle } from './edit';

export default function HPUQueryTitle() {
    const withCustomEditQueryTitle = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/query-title') {
                return editQueryTitle(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-query-title',
        withCustomEditQueryTitle
    );
}