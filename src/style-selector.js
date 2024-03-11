import { InspectorControls } from '@wordpress/block-editor';
import { Button, ButtonGroup, PanelBody } from '@wordpress/components';
import { Component } from '@wordpress/element';

class StyleSelector extends Component {
    render() {
        const { value, onChange } = this.props;

        const styles = {
            primary: 'hpu-blocks-primary-style',
            secondary: 'hpu-blocks-secondary-style',
            muted: 'hpu-blocks-muted-style',
            emphasis: 'hpu-blocks-emphasis-style',
        };

        // Helper function to apply style
        const applyStyle = (styleClass) => {
            onChange(styleClass);
        };

        return (
            <InspectorControls>
                <PanelBody title="Select Style" initialOpen={true}>
                    <ButtonGroup>
                        {Object.entries(styles).map(([key, styleClass]) => (
                            <Button
                                isSecondary
                                key={key}
                                className={value === styleClass ? 'is-active' : ''}
                                onClick={() => applyStyle(styleClass)}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Button>
                        ))}
                    </ButtonGroup>
                </PanelBody>
            </InspectorControls>
        );
    }
}

export default StyleSelector;