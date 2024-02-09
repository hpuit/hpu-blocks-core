import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editCover } from './edit';

export default function HPUCover() {
    const withCustomEditCover = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/cover') {
                return editCover(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-cover',
        withCustomEditCover
    );
}