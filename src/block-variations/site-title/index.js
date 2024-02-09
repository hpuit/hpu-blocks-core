import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editSiteTitle } from './edit';

export default function HPUSiteTitle() {
    const withCustomEditSiteTitle = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/site-title') {
                return editSiteTitle(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-site-title',
        withCustomEditSiteTitle
    );
}