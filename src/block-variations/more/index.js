import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editMore } from './edit';

export default function HPUMore() {
    const withCustomEditMore = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/more') {
                return editMore(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-more',
        withCustomEditMore
    );
}