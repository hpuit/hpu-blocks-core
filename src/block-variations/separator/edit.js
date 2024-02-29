import StyleSelector from "../../style-selector";
import { Component, Fragment } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { HorizontalRule, Panel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default class HPUBlocksSeparatorEdit extends Component {
    componentDidMount() {
        // Get the separator element
        const separatorElement = document.querySelector('.your-separator-class');

        // Check if the element exists before calling getBoundingClientRect
        if (separatorElement !== null) {
            const rect = separatorElement.getBoundingClientRect();
            console.log(rect);
        }
    }

	render() {
		return (
			<Fragment>
				<InspectorControls>
					<Panel title={__('Separator Settings', 'hpu-blocks')}>
						<StyleSelector
							label={__('Separator Style', 'hpu-blocks')}
							value={this.props.attributes.styleClass}
							onChange={(styleClass) => this.props.setAttributes({ styleClass })}
						/>
					</Panel>
				</InspectorControls>
				<HorizontalRule
					className={this.props.attributes.styleClass}
				/>
			</Fragment>
		);
	}
}