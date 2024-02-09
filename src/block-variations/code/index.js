import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCode } from './edit';

export default function HPUCode() {
    const withCustomEditCode = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/code') {
                return editCode(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-code',
        withCustomEditCode
    );
}