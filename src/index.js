import './style.scss';

const gostedBlocks = [
    './archives/index.js',
    './audio/index.js',
    './avatar/index.js',
    './block/index.js',
    './button/index.js',
    './buttons/index.js',
    './calendar/index.js',
    './categories/index.js',
    './code/index.js',
    './column/index.js',
    './columns/index.js',
    './comment-author-name/index.js',
    './comment-content/index.js',
    './comment-date/index.js',
    './comment-edit-link/index.js',
    './comment-reply-link/index.js',
    './comment-template/index.js',
    './comments/index.js',
    './comments-pagination/index.js',
    './comments-pagination-next/index.js',
    './comments-pagination-numbers/index.js',
    './comments-pagination-previous/index.js',
    './comments-title/index.js',
    './cover/index.js',
    './details/index.js',
    './embeds/index.js',
    './file/index.js',
    './footnotes/index.js',
    './form/index.js',
    './form-input/index.js',
    './form-submission-notification/index.js',
    './form-submit-button/index.js',
    './freeform/index.js',
    './gallery/index.js',
    './group/index.js',
    // './heading/index.js',
    './html/index.js',
    './home-link/index.js',
    './image/index.js',
    './latest-comments/index.js',
    './latest-posts/index.js',
    './list/index.js',
    './list-item/index.js',
    './loginout/index.js',
    './media-text/index.js',
    './more/index.js',
    './navigation-link/index.js',
    './navigation-submenu/index.js',
    './navigation/index.js',
    './nextpage/index.js',
    './page-list/index.js',
    './page-list-item/index.js',
    // './paragraph/index.js',
    './pattern/index.js',
    './post-author/index.js',
    './post-author-biography/index.js',
    './post-author-name/index.js',
    './post-comments-count/index.js',
    './post-comments-form/index.js',
    './post-comments-link/index.js',
    './post-content/index.js',
    './post-date/index.js',
    './post-excerpt/index.js',
    './post-featured-image/index.js',
    './post-navigation-link/index.js',
    './post-tag/index.js',
    './post-terms/index.js',
    './post-title/index.js',
    './post-time-to-read/index.js',
    './preformatted/index.js',
    './pullquote/index.js',
    './query/index.js',
    './query-no-results/index.js',
    './query-pagination/index.js',
    './query-pagination-next/index.js',
    './query-pagination-numbers/index.js',
    './query-pagination-previous/index.js',
    './query-title/index.js',
    './quote/index.js',
    './read-more/index.js',
    './rss/index.js',
    './search/index.js',
    // './separator/index.js',
    './shortcode/index.js',
    './site-logo/index.js',
    './site-tagline/index.js',
    './site-title/index.js',
    './social-links/index.js',
    './spacer/index.js',
    './table/index.js',
    './table-of-contents/index.js',
    './tag-cloud/index.js',
    './template-part/index.js',
    './term-description/index.js',
    './verse/index.js',
    './video/index.js',
];

// Dynamically import block variations
const importBlockVariations = () => {
    // 'require.context' parameters: directory to search, include subdirectories, file pattern to match
    const context = require.context('./block-variations/', true, /index\.js$/);

    // Loop through each matched file
    context.keys().forEach((key) => {
        console.log(key);
        // Import the block variation and execute its default export
        // which should be the function that adds the filter for the block
        if (gostedBlocks.includes(key)) {
            console.log('Gosted Block: ' + key);
            return;
        }

        const blockVariation = context(key);

        console.log(blockVariation);
        // Execute the default export function if it exists
        if (blockVariation && blockVariation.default) {
            blockVariation.default();
        };
    });
};

// Ensure this runs after the WordPress editor is initialized
// This can be done by using the '@wordpress/dom-ready' package
import domReady from '@wordpress/dom-ready';

domReady(() => {
    importBlockVariations();
});
