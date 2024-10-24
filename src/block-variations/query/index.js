import { useState, useEffect } from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import { registerBlockExtension } from '@10up/block-components';
import { SelectControl, Panel } from '@wordpress/components';

const additionalQueryAttributes = {
    hpuBlogSelector: {
        type: 'number',
        default: '',
    },
    hpuCategorySelector: {
        type: 'number',
        default: '',
    },
    hpuPostSelector: {
        type: 'number',
        default: '',
    },
    query: {
        type: 'object',
        default: {
            postType: 'post',
            pages: 2,
            perPage: 1,
            offset: 0,
            order: 'desc',
            orderby: 'date',
            category: '',
            tag: '',
        },
    },
};
const BlockEdit = ( props ) => {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/wp-json/custom/v1/blogs')
            .then((response) => response.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.error('Error fetching blogs:', error));
    }, []);

    const setBlogAttribute = ( value ) => {
        props.setAttributes( { hpuBlogSelector: value } );
        fetchCategories( value );
    };
    const fetchCategories = ( blogId ) => {
        fetch(`/wp-json/custom/v1/blogs/${ blogId }/categories`)
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Error fetching taxonomies:', error));
    };
    const setCategoryAttribute = ( value ) => {
        props.setAttributes( { hpuCategorySelector: value } );
    };
    const setPostAttribute = ( value ) => {
        props.setAttributes( { hpuPostSelector: value } );
    };
    // retrieve all blogs id from network
    const blogIdsOptions = [
        {
            label: 'Select Site',
            value: '',
        },
        ...blogs.map(( blog ) => ({
            label: blog.name,
            value: blog.id,
        })),
    ];
    // retrieve all categories id from network
    const categoryIdsOptions = [
        {
            label: 'Select Category',
            value: '',
        },
        ...categories.map(( category ) => ({
            label: category.name,
            value: category.id,
        })),
    ];

    return (
        <InspectorControls>
            <Panel
                header="HPU Blocks Query Setting"
            >
                <SelectControl
                    label="1. Select Site"
                    value={ props.attributes.hpuBlogSelector }
                    options={ blogIdsOptions }
                    onChange={ setBlogAttribute }
                />
                { props.attributes.hpuBlogSelector && (
                    <SelectControl
                        label="2. Select Category"
                        value={ props.attributes.hpuCategorySelector }
                        options={ categoryIdsOptions }
                        onChange={ setCategoryAttribute }
                    />
                )}
                { props.attributes.hpuCategorySelector && (
                    <SelectControl
                        label="3. Select Post"
                        value={ props.attributes.hpuPostSelector }
                        options={ [
                            {
                                label: 'Post 1',
                                value: '1',
                            },
                            {
                                label: 'Post 2',
                                value: '2',
                            },
                            {
                                label: 'Post 3',
                                value: '3',
                            },
                        ] }
                        onChange={ setPostAttribute }
                    />
                )}
            </Panel>
        </InspectorControls>
    );
};
const generateQueryClassName = ( attributes ) => {
    let string = '';
    if ( attributes.hpuBlogSelector ) {
        string += `${ attributes.hpuBlogSelector } `;
    }
    if ( attributes.hpuCategorySelector ) {
        string += `${ attributes.hpuCategorySelector } `;
    }
    if ( attributes.hpuPostSelector ) {
        string += `${ attributes.hpuPostSelector } `;
    }
    return string;
};
registerBlockExtension( 'core/query', {
    extensionName: 'hpu-blocks-core-query-selector',
    attributes: additionalQueryAttributes,
    classNameGenerator: generateQueryClassName,
    Edit: BlockEdit,
});

// import { createHigherOrderComponent } from '@wordpress/compose';
// import { addFilter } from '@wordpress/hooks';
// import { default as editQuery } from './edit';

// export default function HPUQuery() {
//     const withCustomEditQuery = createHigherOrderComponent((BlockEdit) => {
//         return (props) => {
//             if (props.name === 'core/query') {
//                 return editQuery(props);
//             }
//             return <BlockEdit {...props} />;
//         };

//     });

//     addFilter(
//         'editor.BlockEdit',
//         'hpu-blocks/HPU-query',
//         withCustomEditQuery
//     );
// }