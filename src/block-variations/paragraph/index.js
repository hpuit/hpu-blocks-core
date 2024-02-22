import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as HPUEditParagraph } from './edit';

export default function HPUParagraph() {
    const withCustomEditParagraph = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/paragraph') {
                return HPUEditParagraph(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-paragraph',
        withCustomEditParagraph
    );
}