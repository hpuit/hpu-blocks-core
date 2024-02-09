import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editQueryPagination } from './edit';

export default function HPUQueryPagination() {
    const withCustomEditQueryPagination = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/query-pagination') {
                return editQueryPagination(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-query-pagination',
        withCustomEditQueryPagination
    );
}