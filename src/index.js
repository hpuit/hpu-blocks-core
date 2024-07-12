import domReady from '@wordpress/dom-ready';
import './style.scss';


const gostedBlocks = [
    // --> core/archives                         // completed 
    './archives/index.js',                     // 3/4
    // --> core/avatar                          // missing
    // --> core/audio
    //'./audio/index.js',                       // completed
    // --> core/block                           // completed
    './block/index.js',                        // 3/4
    // --> core/button                          // completed
    //'./button/index.js',                     // 3/11
    // --> core/buttons                         // completed
    //'./buttons/index.js',                    // 3/11
    // --> core/calendar                        // missing
    // --> core/categories                      // completed
    './categories/index.js',                    // no date
    // --> core/code                            // completed
    './code/index.js',                          // no date
    // --> core/column                          // completed
    //'./column/index.js',                     // 3/11
    // --> core/columns                         // completed
    //'./columns/index.js',                    // 3/11
    // --> core/comments                       // missing 
    // --> core/commentAuthorAvatar            // missing
    // --> core/commentAuthorName              // missing
    // --> core/commentContent                 // missing
    // --> core/commentDate                    // missing
    // --> core/commentEditLink                // missing
    // --> core/commentReplyLink               // missing
    // --> core/commentTemplate                // missing 
    // --> core/commentsPaginationPrevious     // missing
    // --> core/commentsPagination             // missing
    // --> core/commentsPaginationNext         // missing
    // --> core/commentsPaginationNumbers      // missing
    // --> core/commentsTitle                  // missing
    // --> core/cover                          // completed
    //'./cover/index.js',                      // 3/4
    // --> core/details                          // completed
    './details/index.js',                      // no date
    // --> core/embed                           // completed
    './embeds/index.js',                        // no date
    // --> core/file                            // completed
    './file/index.js',                          // no date
    // --> core/form                            // completed
    './form/index.js',                          // no date
    // --> core/formInput                       // completed
    './form-input/index.js',                    // no date
    // --> core/formSubmitButton                // completed
    './form-submit-button/index.js',            // no date
    // --> core/formSubmissionNotification       // completed
    './form-submission-notification/index.js',  // no date
    // --> CUSTOM                               // completed
    './freeform/index.js',                     // 3/4 WYSIWYG Block
    // --> core/gallery                         // completed
    './gallery/index.js',                      // 3/18
    // --> core/group                           // completed
    './group/index.js',                        // 3/11
    // --> core/heading                         // completed, not operational
    //'./heading/index.js',                     // no date
    // --> core/html                           // completed
    './html/index.js',                         // Super Admin Only - no date
    // --> core/homeLink                       // completed
    './home-link/index.js',                     // no date
    // --> core/image                          // completed
    './image/index.js',                        // 3/4
    // --> core/latestComments                 // missing
    // --> core/latestPosts                    // completed
    './latest-posts/index.js',                 // 3/4
    // --> core/list                              // completed, not operational
    //'./list/index.js',                       // 3/11
    // --> core/listItem                          // completed, not operational
    //'./list-item/index.js',                  // 3/11
    // --> core/logInOut                         // completed
    './loginout/index.js',                      // no date
    // --> core/mediaText                        // completed
    './media-text/index.js',                   // 3/18
    // --> core/missing                         // missing
    // --> core/more                            // completed    
    './more/index.js',                          // no date
    // --> core/navigation                      // completed
    './navigation/index.js',                    // no date
    // --> core/navigationLink                  // completed
    './navigation-link/index.js',               // no date
    // --> core/navigationSubmenu               // completed
    './navigation-submenu/index.js',            // no date
    // --> core/nextpage                        // completed
    './nextpage/index.js',                      // no date
    // --> core/pattern                         // completed
    './pattern/index.js',                       // no date
    // --> core/pageList                        // completed
    './page-list/index.js',                     // no date
    // --> core/pageListItem                    // completed
    './page-list-item/index.js',                // no date
    // --> core/paragraph                       // completed not operational
    //'./paragraph/index.js',                   // no date
    // --> core/postAuthor                      // completed
    './post-author/index.js',                   // no date
    // -->core/postAuthorBiography              // completed
    './post-author-biography/index.js',         // no date
    // --> core/postAuthorName                  // completed
    './post-author-name/index.js',              // no date
    // --> core/postComment                     // missing 
0   // --> core/postCommentsCount               // missing
    // --> core/postCommentsForm                // missing
    // --> core/postCommentsLink                // missing
    // --> core/postContent,                     // completed
    './post-content/index.js',                  // no date

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
    //'./separator/index.js',
    './shortcode/index.js',
    './site-logo/index.js',
    './site-tagline/index.js',
    './site-title/index.js',
    './social-links/index.js',
    './spacer/index.js',
    './table/index.js',
    './template-part/index.js',
    './video/index.js',                        //3/4
];

// Dynamically import block variations
function importBlockVariations() {
    // 'require.context' parameters: directory to search, include subdirectories, file pattern to match
    const context = require.context('./block-variations/', true, /index\.js$/);
    // console.log(context);

    // Loop through each matched file
    context.keys().forEach((key) => {
        // console.log(key);
        // Import the block variation and execute its default export
        // which should be the function that adds the filter for the block
        if (gostedBlocks.includes(key)) {
            // console.log('Gosted Block: ' + key);
            return;
        }

        const blockVariation = context(key);

        // console.log(blockVariation);
        // Execute the default export function if it exists
        if (blockVariation && blockVariation.default) {
            blockVariation.default();
        };
    });
}

// Ensure this runs after the WordPress editor is initialized
// This can be done by using the '@wordpress/dom-ready' package
domReady(() => {
    // console.log('domReady: ');
    importBlockVariations();
});
