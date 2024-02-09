import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editPostTemplate } from './edit';

export default function HPUPostTemplate() {
    const withCustomEditPostTemplate = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/post-template') {
                return editPostTemplate(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-post-template',
        withCustomEditPostTemplate
    );
}