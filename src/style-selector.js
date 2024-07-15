import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
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
                    <SelectControl 
                        label="Select Style" 
                        value={value} 
                        options={
                            Object.entries(styles).map(([key, styleClass]) => ({ 
                                label: key.charAt(0).toUpperCase() + key.slice(1), 
                                value: styleClass })
                            )} 
                        onChange={onChange} 
                    />
                </PanelBody>
            </InspectorControls>
        );
    }
}

export default StyleSelector;