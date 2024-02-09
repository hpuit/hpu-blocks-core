import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPattern } from './edit';

export default function HPUPattern() {
    const withCustomEditPattern = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/pattern') {
                return editPattern(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-pattern',
        withCustomEditPattern
    );
}