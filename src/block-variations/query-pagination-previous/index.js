import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editQueryPaginationPrevious } from './edit';

export default function HPUQueryPaginationPrevious() {
    const withCustomEditQueryPaginationPrevious = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/query-pagination-previous') {
                return editQueryPaginationPrevious(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-query-pagination-previous',
        withCustomEditQueryPaginationPrevious
    );
}