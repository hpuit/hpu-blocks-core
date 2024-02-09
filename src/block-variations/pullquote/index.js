import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPullquote } from './edit';

export default function HPUPullquote() {
    const withCustomEditPullquote = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/pullquote') {
                return editPullquote(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-pullquote',
        withCustomEditPullquote
    );
}