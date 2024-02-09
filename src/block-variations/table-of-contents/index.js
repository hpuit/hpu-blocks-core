import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editTableOfContents } from './edit';

export default function HPUTableOfContents() {
    const withCustomEditTableOfContents = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/table-of-contents') {
                return editTableOfContents(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-table-of-contents',
        withCustomEditTableOfContents
    );
}