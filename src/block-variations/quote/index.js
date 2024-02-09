import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editQuote } from './edit';

export default function HPUQuote() {
    const withCustomEditQuote = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/quote') {
                return editQuote(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-quote',
        withCustomEditQuote
    );
}