import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { BlockEdit } from '@wordpress/block-editor';

export default function HPUEditColumns(props) {
    const { attributes, setAttributes } = props;
    const { columns } = attributes;

    const onChangeColumns = (newColumns) => {
        setAttributes({ columns: newColumns });
    };

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__('Columns Settings')}>
                    <RangeControl
                        label={__('Columns')}
                        value={columns}
                        onChange={onChangeColumns}
                        min={2}
                        max={6}
                    />
                </PanelBody>
            </InspectorControls>
            <BlockEdit {...props} />
        </Fragment>
    );
}