import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editParagraph } from './edit';

export default function HPUParagraph() {
    const withCustomEditParagraph = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/paragraph') {
                return editParagraph(props);
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