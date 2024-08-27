import { InspectorControls } from '@wordpress/block-editor';
import { registerBlockExtension } from '@10up/block-components';
import { SelectControl, Panel } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { unregisterBlockStyle } from '@wordpress/blocks';

unregisterBlockStyle( 'core/paragraph', 'layout' );

// Function to remove the styles panel from the paragraph block settings
const removeParagraphStylesPanel = ( settings, name ) => {


	if ( name !== 'core/paragraph' ) {
		return settings;
	}
	settings.supports = {
		...settings.supports,
		color: false,
		typography: false,
	};
	return settings;
};

// Add the filter to remove the styles panel
addFilter(
	'blocks.registerBlockType',
	'hpu-blocks-core/remove-paragraph-styles-panel',
	removeParagraphStylesPanel
);

const additionalAttributes = {
	hpuStyleClass: {
		type: 'string',
		default: '',
	},
};
const BlockEdit = ( props ) => {
	const setStyleAttribute = ( value ) => {
		props.setAttributes( { hpuStyleClass: value } );
	};
	return (
		<InspectorControls>
			<Panel
				header="HPU Blocks Paragraph Setting"
				className="hpu-blocks-emphasis-style"
			>
				<SelectControl
					label="Select Style"
					value={ props.attributes.hpuStyleClass }
					options={ [
						{
							label: 'None Selected',
							value: '',
						},
						{
							label: 'Primary',
							value: 'hpu-blocks-primary-style',
						},
						{
							label: 'Secondary',
							value: 'hpu-blocks-secondary-style',
						},
						{
							label: 'Muted',
							value: 'hpu-blocks-muted-style',
						},
						{
							label: 'Emphasis',
							value: 'hpu-blocks-emphasis-style',
						},
					] }
					onChange={ setStyleAttribute }
				/>
			</Panel>
		</InspectorControls>
	);
};
const generateClassName = ( attributes ) => {
	let string = '';
	if ( attributes.hpuStyleClass ) {
		string += `${ attributes.hpuStyleClass } `;
	}
	return string;
};
registerBlockExtension( [ 'core/group', 'core/columns' ], {
	extensionName: 'hpu-blocks-core-selector',
	attributes: additionalAttributes,
	classNameGenerator: generateClassName,
	Edit: BlockEdit,
} );
