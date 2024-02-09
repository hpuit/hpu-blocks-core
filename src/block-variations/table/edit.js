/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useEffect, useRef, useState } from '@wordpress/element';
import {
    InspectorControls,
    BlockControls,
    RichText,
    BlockIcon,
    AlignmentControl,
    useBlockProps,
    __experimentalUseColorProps as useColorProps,
    __experimentalUseBorderProps as useBorderProps,
    __experimentalGetElementClassName,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
    Button,
    PanelBody,
    Placeholder,
    TextControl,
    ToggleControl,
    ToolbarDropdownMenu,
    __experimentalHasSplitBorders as hasSplitBorders,
} from '@wordpress/components';
import {
    alignLeft,
    alignRight,
    alignCenter,
    blockTable as icon,
    tableColumnAfter,
    tableColumnBefore,
    tableColumnDelete,
    tableRowAfter,
    tableRowBefore,
    tableRowDelete,
    table,
} from '@wordpress/icons';
import { createBlock, getDefaultBlockName } from '@wordpress/blocks';


const ALIGNMENT_CONTROLS = [
    {
        icon: alignLeft,
        title: __('Align column left'),
        align: 'left',
    },
    {
        icon: alignCenter,
        title: __('Align column center'),
        align: 'center',
    },
    {
        icon: alignRight,
        title: __('Align column right'),
        align: 'right',
    },
];

const cellAriaLabel = {
    head: __('Header cell text'),
    body: __('Body cell text'),
    foot: __('Footer cell text'),
};

const placeholder = {
    head: __('Header label'),
    foot: __('Footer label'),
};

function TSection({ name, ...props }) {
    const TagName = `t${name}`;
    return <TagName {...props} />;
}

function editTable({
    attributes,
    setAttributes,
    insertBlocksAfter,
    isSelected,
}) {
    const { hasFixedLayout, caption, head, foot } = attributes;
    const [initialRowCount, setInitialRowCount] = useState(2);
    const [initialColumnCount, setInitialColumnCount] = useState(2);
    const [selectedCell, setSelectedCell] = useState();

    const colorProps = useColorProps(attributes);
    const borderProps = useBorderProps(attributes);

    const tableRef = useRef();
    const [hasTableCreated, setHasTableCreated] = useState(false);

    /**
     * Updates the initial column count used for table creation.
     *
     * @param {number} count New initial column count.
     */
    function onChangeInitialColumnCount(count) {
        setInitialColumnCount(count);
    }

    /**
     * Updates the initial row count used for table creation.
     *
     * @param {number} count New initial row count.
     */
    function onChangeInitialRowCount(count) {
        setInitialRowCount(count);
    }

    /**
     * Toggles whether the table has a fixed layout or not.
     */
    function onChangeFixedLayout() {
        setAttributes({ hasFixedLayout: !hasFixedLayout });
    }

    /**
     * Inserts a row before the currently selected row.
     */
    function onInsertRowBefore() {
        onInsertRow(0);
    }

    /**
     * Inserts a row after the currently selected row.
     */
    function onInsertRowAfter() {
        onInsertRow(1);
    }


    useEffect(() => {
        if (!isSelected) {
            setSelectedCell();
        }
    }, [isSelected]);

    useEffect(() => {
        if (hasTableCreated) {
            tableRef?.current
                ?.querySelector('td div[contentEditable="true"]')
                ?.focus();
            setHasTableCreated(false);
        }
    }, [hasTableCreated]);

    const tableControls = [
        {
            icon: tableRowBefore,
            title: __('Insert row before'),
            isDisabled: !selectedCell,
            onClick: onInsertRowBefore,
        },
        {
            icon: tableRowAfter,
            title: __('Insert row after'),
            isDisabled: !selectedCell,
            onClick: onInsertRowAfter,
        },
        {
            icon: tableRowDelete,
            title: __('Delete row'),
            isDisabled: !selectedCell,
            onClick: onDeleteRow,
        },
        {
            icon: tableColumnBefore,
            title: __('Insert column before'),
            isDisabled: !selectedCell,
            onClick: onInsertColumnBefore,
        },
        {
            icon: tableColumnAfter,
            title: __('Insert column after'),
            isDisabled: !selectedCell,
            onClick: onInsertColumnAfter,
        },
        {
            icon: tableColumnDelete,
            title: __('Delete column'),
            isDisabled: !selectedCell,
            onClick: onDeleteColumn,
        },
    ];

    const renderedSections = sections.map((name) => (
        <TSection name={name} key={name}>
            {attributes[name].map(({ cells }, rowIndex) => (
                <tr key={rowIndex}>
                    {cells.map(
                        (
                            {
                                content,
                                tag: CellTag,
                                scope,
                                align,
                                colspan,
                                rowspan,
                            },
                            columnIndex
                        ) => (
                            <CellTag
                                key={columnIndex}
                                scope={CellTag === 'th' ? scope : undefined}
                                colSpan={colspan}
                                rowSpan={rowspan}
                                className={classnames(
                                    {
                                        [`has-text-align-${align}`]: align,
                                    },
                                    'wp-block-table__cell-content'
                                )}
                            >
                                <RichText
                                    value={content}
                                    onChange={onChange}
                                    onFocus={() => {
                                        setSelectedCell({
                                            sectionName: name,
                                            rowIndex,
                                            columnIndex,
                                            type: 'cell',
                                        });
                                    }}
                                    aria-label={cellAriaLabel[name]}
                                    placeholder={placeholder[name]}
                                />
                            </CellTag>
                        )
                    )}
                </tr>
            ))}
        </TSection>
    ));

    const isEmpty = !sections.length;

    return (
        <figure {...useBlockProps({ ref: tableRef })}>
            {!isEmpty && (
                <>
                    <BlockControls group="block">
                        <AlignmentControl
                            label={__('Change column alignment')}
                            alignmentControls={ALIGNMENT_CONTROLS}
                            value={getCellAlignment()}
                            onChange={(nextAlign) =>
                                onChangeColumnAlignment(nextAlign)
                            }
                        />
                    </BlockControls>
                    <BlockControls group="other">
                        <ToolbarDropdownMenu
                            hasArrowIndicator
                            icon={table}
                            label={__('Edit table')}
                            controls={tableControls}
                        />
                    </BlockControls>
                </>
            )}
            <InspectorControls>
                <PanelBody
                    title={__('Settings')}
                    className="blocks-table-settings"
                >
                    <ToggleControl
                        __nextHasNoMarginBottom
                        label={__('Fixed width table cells')}
                        checked={!!hasFixedLayout}
                        onChange={onChangeFixedLayout}
                    />
                    {!isEmpty && (
                        <>
                            <ToggleControl
                                __nextHasNoMarginBottom
                                label={__('Header section')}
                                checked={!!(head && head.length)}
                                onChange={onToggleHeaderSection}
                            />
                            <ToggleControl
                                __nextHasNoMarginBottom
                                label={__('Footer section')}
                                checked={!!(foot && foot.length)}
                                onChange={onToggleFooterSection}
                            />
                        </>
                    )}
                </PanelBody>
            </InspectorControls>
            {!isEmpty && (
                <table
                    className={classnames(
                        colorProps.className,
                        borderProps.className,
                        {
                            'has-fixed-layout': hasFixedLayout,
                            // This is required in the editor only to overcome
                            // the fact the editor rewrites individual border
                            // widths into a shorthand format.
                            'has-individual-borders': hasSplitBorders(
                                attributes?.style?.border
                            ),
                        }
                    )}
                    style={{ ...colorProps.style, ...borderProps.style }}
                >
                    {renderedSections}
                </table>
            )}
            {!isEmpty && (
                <RichText
                    identifier="caption"
                    tagName="figcaption"
                    className={__experimentalGetElementClassName('caption')}
                    aria-label={__('Table caption text')}
                    placeholder={__('Add caption')}
                    value={caption}
                    onChange={(value) =>
                        setAttributes({ caption: value })
                    }
                    // Deselect the selected table cell when the caption is focused.
                    onFocus={() => setSelectedCell()}
                    __unstableOnSplitAtEnd={() =>
                        insertBlocksAfter(
                            createBlock(getDefaultBlockName())
                        )
                    }
                />
            )}
            {isEmpty && (
                <Placeholder
                    label={__('Table')}
                    icon={<BlockIcon icon={icon} showColors />}
                    instructions={__('Insert a table for sharing data.')}
                >
                    <form
                        className="blocks-table__placeholder-form"
                        onSubmit={onCreateTable}
                    >
                        <TextControl
                            __nextHasNoMarginBottom
                            __next40pxDefaultSize
                            type="number"
                            label={__('Column count')}
                            value={initialColumnCount}
                            onChange={onChangeInitialColumnCount}
                            min="1"
                            className="blocks-table__placeholder-input"
                        />
                        <TextControl
                            __nextHasNoMarginBottom
                            __next40pxDefaultSize
                            type="number"
                            label={__('Row count')}
                            value={initialRowCount}
                            onChange={onChangeInitialRowCount}
                            min="1"
                            className="blocks-table__placeholder-input"
                        />
                        <Button
                            __next40pxDefaultSize
                            variant="primary"
                            type="submit"
                        >
                            {__('Create Table')}
                        </Button>
                    </form>
                </Placeholder>
            )}
        </figure>
    );
}

export default editTable;