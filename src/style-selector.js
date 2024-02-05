import { useSelect, useDispatch } from '@wordpress/data';
import { Button, PanelBody } from '@wordpress/components';

const StyleSelector = ({ clientId }) => {
    const { updateBlockAttributes } = useDispatch('core/block-editor');
    const { attributes } = useSelect(
        (select) => select('core/block-editor').getBlock(clientId),
        [clientId]
    );

    const styles = {
        primary: 'style-primary',
        secondary: 'style-secondary',
        muted: 'style-muted',
        alert: 'style-alert',
    };

    // Helper function to apply style
    const applyStyle = (styleClass) => {
        // Remove all style classes first
        let newClassName = attributes.className ? attributes.className.split(' ').filter(c => !Object.values(styles).includes(c)).join(' ') : '';
        // Add the selected style class
        newClassName = `${newClassName} ${styleClass}`.trim();

        updateBlockAttributes(clientId, { className: newClassName });
    };

    return (
        <PanelBody title="Select Style" initialOpen={true}>
            {Object.entries(styles).map(([key, styleClass]) => (
                <Button
                    isSecondary
                    key={key}
                    className={attributes.className?.includes(styleClass) ? 'is-active' : ''}
                    onClick={() => applyStyle(styleClass)}
                >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                </Button>
            ))}
        </PanelBody>
    );
};

export default StyleSelector;