import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editBlock } from './edit';

export default function HPUBlock() {
    const withCustomEditBlock = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/block') {
                return editBlock(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-block',
        withCustomEditBlock
    );
}