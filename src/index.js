import './style.scss';

const gostedBlocks = [
    // './archives/index.js',                   //3/4
    './audio/index.js',
    './avatar/index.js',                        //Probably not needed
    './block/index.js',                         //3/4
    './button/index.js',                        //3/11
    './buttons/index.js',                       //3/11
    './calendar/index.js',                      //Probably not needed
    './categories/index.js',
    './code/index.js',
    './column/index.js',                        //3/11
    './columns/index.js',                       //3/11
    './comment-author-name/index.js',           //Probably not needed
    './comment-content/index.js',               //Probably not needed
    './comment-date/index.js',                  //Probably not needed
    './comment-edit-link/index.js',             //Probably not needed
    './comment-reply-link/index.js',            //Probably not needed
    './comment-template/index.js',              //Probably not needed
    './comments/index.js',                      //Probably not needed
    './comments-pagination/index.js',           //Probably not needed
    './comments-pagination-next/index.js',      //Probably not needed
    './comments-pagination-numbers/index.js',   //Probably not needed
    './comments-pagination-previous/index.js',  //Probably not needed
    './comments-title/index.js',                //Probably not needed
    // './cover/index.js',                      //3/4
    './details/index.js',
    './embeds/index.js',
    './file/index.js',
    './footnotes/index.js',                     //Probably not needed
    './form/index.js',
    './form-input/index.js',
    './form-submission-notification/index.js',
    './form-submit-button/index.js',
    './freeform/index.js',                      //3/4 WYSIWYG Block
    './gallery/index.js',                       //3/18
    './group/index.js',                         //3/11
    // './heading/index.js',
    './html/index.js',                          //Super Admin Only  
    './home-link/index.js',
    './image/index.js',                         //3/4
    './latest-comments/index.js',               //Probably not needed
    './latest-posts/index.js',                  //3/4
    './list/index.js',                          //3/11
    './list-item/index.js',                     //3/11
    './loginout/index.js',
    './media-text/index.js',                    //3/18
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
    './table-of-contents/index.js',             //Probably not needed
    './tag-cloud/index.js',                     //Probably not needed
    './template-part/index.js',
    './term-description/index.js',              //Probably not needed
    './verse/index.js',                         //Probably not needed
    './video/index.js',                         //3/4
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
