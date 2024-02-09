import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editButton } from './edit';

export default function HPUButton() {
    const withCustomEditButton = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/button') {
                return editButton(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-button',
        withCustomEditButton
    );
}