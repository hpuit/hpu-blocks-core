import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editFootnotes } from './edit';

export default function HPUFootnotes() {
    const withCustomEditFootnotes = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/footnotes') {
                return editFootnotes(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-footnotes',
        withCustomEditFootnotes
    );
}