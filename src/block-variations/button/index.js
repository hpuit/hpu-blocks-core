import { InspectorControls } from '@wordpress/block-editor';
import { registerBlockExtension } from '@10up/block-components';
import { SelectControl, Panel } from '@wordpress/components';


const additionalButtonAttributes = {
    hpuButtonStyleClass: {
        type: 'string',
        default: '',
    },
};
const BlockEdit = ( props ) => {
    const setStyleAttribute = ( value ) => {
        props.setAttributes( { hpuButtonStyleClass: value } );
    };
    return (
        <InspectorControls>
            <Panel
                header="HPU Blocks Button Setting"
            >
                <SelectControl
                    label="Select Button Style"
                    value={ props.attributes.hpuButtonStyleClass }
                    options={ [
                        {
                            label: 'Default',
                            value: 'hpu-blocks-default-button-style',
                        },
                        {
                            label: 'Primary',
                            value: 'hpu-blocks-primary-button-style',
                        },
                        {
                            label: 'Secondary',
                            value: 'hpu-blocks-secondary-button-style',
                        },
                        {
                            label: 'Muted',
                            value: 'hpu-blocks-muted-button-style',
                        },
                        {
                            label: 'Emphasis',
                            value: 'hpu-blocks-emphasis-button-style',
                        },
                    ] }
                    onChange={ setStyleAttribute }
                />
            </Panel>
        </InspectorControls>
    );
};
const generateButtonClassName = ( attributes ) => {
    let string = '';
    if ( attributes.hpuButtonStyleClass ) {
        string += `${ attributes.hpuButtonStyleClass } `;
    }
    return string;
};
registerBlockExtension( 'core/button', {
    extensionName: 'hpu-blocks-core-button-selector',
    attributes: additionalButtonAttributes,
    classNameGenerator: generateButtonClassName,
    Edit: BlockEdit,
} );
