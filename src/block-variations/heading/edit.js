import { Component } from '@wordpress/element';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import { Button, ButtonGroup, Panel, PanelBody, SelectControl } from '@wordpress/components';
import StyleSelector from '../../style-selector';
import { __experimentalHeading as Heading } from '@wordpress/components';

export default class HPUEditHeading extends Component {
    render() {
        const { attributes, setAttributes } = this.props;
        console.log(attributes);

        const headingLevels = [
            { label: 'H2', value: 2 },
            { label: 'H3', value: 3 },
            { label: 'H4', value: 4 },
            { label: 'H5', value: 5 },
            { label: 'H6', value: 6 },
        ];

        return <div>
            <InspectorControls>
                <Panel header="HPU Blocks Heading Style" className='hpu-blocks-emphasis-style'>
                    <StyleSelector
                        value={attributes.styleClass}
                        onChange={(newClass) => setAttributes({ styleClass: newClass })}
                    />
                </Panel>
                <Panel className='hpu-blocks-emphasis-style'>
                    <PanelBody title="Heading Settings">
                        <SelectControl
                            label="Heading Level"
                            options={headingLevels}
                            value={attributes.level}
                            onChange={(newValue) => setAttributes({ level: newValue })}
                            __nextHasNoMarginBottom
                        />
                        <Heading>Alignment</Heading>
                        <ButtonGroup>
                            <Button isPrimary={attributes.textAlign === 'left'} onClick={() => setAttributes({ textAlign: 'left' })}>Left</Button>
                            <Button isPrimary={attributes.textAlign === 'center'} onClick={() => setAttributes({ textAlign: 'center' })}>Center</Button>
                            <Button isPrimary={attributes.textAlign === 'right'} onClick={() => setAttributes({ textAlign: 'right' })}>Right</Button>
                            <Button isPrimary={attributes.textAlign === 'justify'} onClick={() => setAttributes({ textAlign: 'justify' })}>Justify</Button>
                        </ButtonGroup>
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <RichText
                tagName={`h${attributes.level}`}
                value={attributes.content}
                allowedFormats={['core/bold', 'core/italic']}
                onChange={(content) => setAttributes({ content })}
            />
        </div>;
    }
}