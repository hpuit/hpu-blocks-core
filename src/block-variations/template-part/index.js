import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editTemplatePart } from './edit';

export default function HPUTemplatePart() {
    const withCustomEditTemplatePart = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/template-part') {
                return editTemplatePart(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-template-part',
        withCustomEditTemplatePart
    );
}