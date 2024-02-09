import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editReadMore } from './edit';

export default function HPUReadMore() {
    const withCustomEditReadMore = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/read-more') {
                return editReadMore(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-read-more',
        withCustomEditReadMore
    );
}