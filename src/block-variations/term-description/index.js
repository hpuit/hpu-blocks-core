import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editTermDescription } from './edit';

export default function HPUTermDescription() {
    const withCustomEditTermDescription = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/term-description') {
                return editTermDescription(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-term-description',
        withCustomEditTermDescription
    );
}