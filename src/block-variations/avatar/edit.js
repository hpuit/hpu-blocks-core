import { Component } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { Panel } from '@wordpress/components';
import StyleSelector from '../../style-selector';

export default class HPUBlocksAvatarEdit extends Component {
    render() {
        const { attributes, setAttributes } = this.props;
        console.log(attributes)

        return <div>
            <InspectorControls>
                <Panel header="HPU Blocks Avatar Settings" className='hpu-blocks-emphasis-style'>
                    <StyleSelector
                        value={attributes.styleClass}
                        onChange={(newValue) => setAttributes({ styleClass: newValue })}
                    />
                </Panel>
            </InspectorControls>
            <img
                src={attributes.avatarURL}
                style={{ width: '100%' }}
            />
        </div>;
    }
}