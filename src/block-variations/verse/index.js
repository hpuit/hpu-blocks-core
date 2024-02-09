import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editVerse } from './edit';

export default function HPUVerse() {
    const withCustomEditVerse = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/verse') {
                return editVerse(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-verse',
        withCustomEditVerse
    );
}