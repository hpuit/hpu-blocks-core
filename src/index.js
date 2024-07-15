import domReady from '@wordpress/dom-ready';
import './style.scss';


const ghostedBlocks = [
    // --> core/archives                        // completed 
    './archives/index.js',                      // 3/4
    // --> core/avatar                          // missing
    // --> core/audio                           // completed, not operational
    //'./audio/index.js',                       // no date
    // --> core/block                           // completed
    './block/index.js',                         // 3/4
    // --> core/button                          // completed
    //'./button/index.js',                      // 3/11
    // --> core/buttons                         // completed
    //'./buttons/index.js',                     // 3/11
    // --> core/calendar                        // missing
    // --> core/categories                      // completed
    './categories/index.js',                    // no date
    // --> core/code                            // completed
    './code/index.js',                          // no date
    // --> core/column                          // completed
    //'./column/index.js',                      // 3/11
    // --> core/columns                         // completed
    //'./columns/index.js',                     // 3/11
    // --> core/comments                        // missing 
    // --> core/commentAuthorAvatar             // missing
    // --> core/commentAuthorName               // missing
    // --> core/commentContent                  // missing
    // --> core/commentDate                     // missing
    // --> core/commentEditLink                 // missing
    // --> core/commentReplyLink                // missing
    // --> core/commentTemplate                 // missing 
    // --> core/commentsPaginationPrevious      // missing
    // --> core/commentsPagination              // missing
    // --> core/commentsPaginationNext          // missing
    // --> core/commentsPaginationNumbers       // missing
    // --> core/commentsTitle                   // missing
    // --> core/cover                           // completed
    //'./cover/index.js',                       // 3/4
    // --> core/details                         // completed
    './details/index.js',                       // no date
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
    // --> core/formSubmissionNotification      // completed
    './form-submission-notification/index.js',  // no date
    // --> CUSTOM                               // completed
    './freeform/index.js',                      // 3/4 WYSIWYG Block
    // --> core/gallery                         // completed
    './gallery/index.js',                       // 3/18
    // --> core/group                           // completed
    './group/index.js',                         // 3/11
    // --> core/heading                         // completed, not operational
    //'./heading/index.js',                     // no date
    // --> core/html                            // completed
    './html/index.js',                          // Super Admin Only - no date
    // --> core/homeLink                        // completed
    './home-link/index.js',                     // no date
    // --> core/image                           // completed
    './image/index.js',                         // 3/4
    // --> core/latestComments                  // missing
    // --> core/latestPosts                     // completed
    './latest-posts/index.js',                  // 3/4
    // --> core/list                            // completed, not operational
    //'./list/index.js',                        // 3/11
    // --> core/listItem                        // completed, not operational
    //'./list-item/index.js',                   // 3/11
    // --> core/logInOut                        // completed
    './loginout/index.js',                      // no date
    // --> core/mediaText                       // completed
    './media-text/index.js',                    // 3/18
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
    // --> core/postCommentsCount               // missing
    // --> core/postCommentsForm                // missing
    // --> core/postCommentsLink                // missing
    // --> core/postContent,                    // completed
    './post-content/index.js',                  // no date
    // --> core/postDate                        // completed
    './post-date/index.js',                     // no date
    // --> core/postExcerpt                     // completed
    './post-excerpt/index.js',                  // no date
    // --> core/postFeaturedImage               // completed
    './post-featured-image/index.js',           // no date
    // --> core/postNavigationLink              // completed
    './post-navigation-link/index.js',          // no date
    // --> core/postTemplate                    // missing
    // --> core/postTerms                       // completed
    './post-terms/index.js',                    // no date
    // --> core/postTimeToRead                  // completed
    './post-time-to-read/index.js',             // no date
    // --> core/postTitle                       // completed
    './post-title/index.js',                    // no date
    // --> CUSTOM                               // completed
    './post-tag/index.js',                      // no date
    // --> core/preformatted                    // completed
    './preformatted/index.js',                  // no date
    // --> core/pullquote                       // completed
    './pullquote/index.js',                     // no date
    // --> core/query                           // completed
    './query/index.js',                         // no date
    // --> core/queryNoResults                  // completed
    './query-no-results/index.js',              // no date
    // --> core/queryPagination                 // completed    
    './query-pagination/index.js',              // no date
    // --> core/queryPaginationNext             // completed
    './query-pagination-next/index.js',         // no date
    // --> core/queryPaginationNumbers          // completed
    './query-pagination-numbers/index.js',      // no date
    // --> core/queryPaginationPrevious         // completed
    './query-pagination-previous/index.js',     // no date
    // --> core/queryTitle                      // completed
    './query-title/index.js',                   // no date
    // --> core/quote                           // completed
    './quote/index.js',                         // no date
    // --> core/reusableBlock                   // missing
    // --> core/readMore                        // completed
    './read-more/index.js',                     // no date
    // --> core/rss                             // completed
    './rss/index.js',                           // no date
    // --> core/search                          // completed
    './search/index.js',                        // no date
    // --> core/separator                       // completed, not operational
    //'./separator/index.js',                   // no date
    // --> core/shortcode                       // completed
    './shortcode/index.js',                     // no date
    // --> core/siteLogo                        // completed
    './site-logo/index.js',                     // no date
    // --> core/siteTagline                     // completed
    './site-tagline/index.js',                  // no date
    // --> core/siteTitle                       // completed
    './site-title/index.js',                    // no date
    // --> core/socialLink                      // missing
    // --> core/socialLinks                     // completed
    './social-links/index.js',                  // no date
    // --> core/spacer                          // completed
    './spacer/index.js',                        // no date
    // --> core/table                           // completed
    './table/index.js',                         // no date
    // --> core/tableOfContents                 // missing
    // --> core/tagCloud                        // missing
    // --> core/templatePart                    // completed
    './template-part/index.js',                 // no date
    // --> core/termDescription                 // missing
    // --> core/textColumns                     // missing
    // --> core/verse                           // missing
    // --> core/video                           // completed
    './video/index.js',                         //3/4
    // --> core/footnotes                       // missing
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
        if (ghostedBlocks.includes(key)) {
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
