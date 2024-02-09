import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editQueryPaginationNumbers } from './edit';

export default function HPUQueryPaginationNumbers() {
    const withCustomEditQueryPaginationNumbers = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/query-pagination-numbers') {
                return editQueryPaginationNumbers(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-query-pagination-numbers',
        withCustomEditQueryPaginationNumbers
    );
}