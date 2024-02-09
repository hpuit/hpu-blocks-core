import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostTerms } from './edit';

export default function HPUPostTerms() {
    const withCustomEditPostTerms = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-terms') {
                return editPostTerms(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-terms',
        withCustomEditPostTerms
    );
}