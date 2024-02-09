import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editNextPage } from './edit';

export default function HPUNextPage() {
    const withCustomEditNextPage = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/nextpage') {
                return editNextPage(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-nextpage',
        withCustomEditNextPage
    );
}