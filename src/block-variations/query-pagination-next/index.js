import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editQueryPaginationNext } from './edit';

export default function HPUQueryPaginationNext() {
    const withCustomEditQueryPaginationNext = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/query-pagination-next') {
                return editQueryPaginationNext(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-query-pagination-next',
        withCustomEditQueryPaginationNext
    );
}