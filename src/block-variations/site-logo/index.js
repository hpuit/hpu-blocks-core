import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { default as editSiteLogo } from './edit';

export default function HPUSiteLogo() {
    const withCustomEditSiteLogo = createHigherOrderComponent((BlockEdit) => {
        return (props) => {
            if (props.name === 'core/site-logo') {
                return editSiteLogo(props);
            }
            return <BlockEdit {...props} />;
        };
    });

    addFilter(
        'editor.BlockEdit',
        'hpu-blocks/HPU-site-logo',
        withCustomEditSiteLogo
    );
}