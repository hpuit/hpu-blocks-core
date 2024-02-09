import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editQuery } from './edit';

export default function HPUQuery() {
    const withCustomEditQuery = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/query') {
                return editQuery(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-query',
        withCustomEditQuery
    );
}