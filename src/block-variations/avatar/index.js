import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editAvatar } from './edit';

export default function HPUAvatar() {
    const withCustomEditAvatar = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/avatar') {
                return editAvatar(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-avatar',
        withCustomEditAvatar
    );
}