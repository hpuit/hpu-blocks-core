import { Component } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { Panel } from '@wordpress/components';
import StyleSelector from '../../style-selector';

export default class HPUBlocksAudioEdit extends Component {
    render() {
        const { attributes, setAttributes } = this.props;
        console.log(attributes)

        return <div>
            <InspectorControls>
                <Panel header="HPU Blocks Audio Settings" className='hpu-blocks-emphasis-style'>
                    <StyleSelector
                        value={attributes.styleClass}
                        onChange={(newValue) => setAttributes({ styleClass: newValue })}
                    />
                </Panel>
            </InspectorControls>
            <audio
                src={attributes.audioURL}
                controls={true}
                style={{ width: '100%' }}
            />
        </div>;
    }
}