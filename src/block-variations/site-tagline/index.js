import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editSiteTagline } from './edit';

export default function HPUSiteTagline() {
    const withCustomEditSiteTagline = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/site-tagline') {
                return editSiteTagline(props);
            }
            return <BlockEdit {...props} />;
        };

    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-site-tagline',
        withCustomEditSiteTagline
    );
}