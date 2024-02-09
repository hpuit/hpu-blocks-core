import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editLoginout } from './edit';

export default function HPULoginout() {
    const withCustomEditLoginout = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/loginout') {
                return editLoginout(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-loginout',
        withCustomEditLoginout
    );
}