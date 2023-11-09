!function(){"use strict";var e,t={102:function(e,t,o){var a=window.wp.blocks,s=window.wp.domReady;o.n(s)()((function(){(0,a.registerBlockVariation)("core/archives",{name:"hpu-blocks-archives",title:"Archives",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-archives",displayAsDropdown:{type:"boolean",default:!1},showPostCounts:{type:"boolean",default:!1},showLabel:{type:"boolean",default:!1}},supports:{align:!1,html:!1,spacing:!1,typography:!1},isActive:(e,t)=>[e.displayAsDropdown===t.displayAsDropdown,e.providerNameSlug===t.providerNameSlug,e.showPostCounts===t.showPostCounts,e.showLabel===t.showLabel,e.className===t.className]}),(0,a.registerBlockVariation)("core/audio",{name:"hpu-blocks-audio",title:"Audio",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-audio",autoplay:{type:"boolean",default:!1},caption:{type:"string",default:""},loop:{type:"boolean",default:!1},id:{type:"string",default:""},src:{type:"string",default:""},preload:{type:"string",default:""}},supports:{align:!1,html:!1,spacing:!1,anchor:!0},isActive:(e,t)=>[e.providerNameSlug===t.providerNameSlug,e.className===t.className,e.autoplay===t.autoplay,e.preload===t.preload,e.caption===t.caption,e.loop===t.loop,e.src===t.src,e.id===t.id]}),(0,a.registerBlockVariation)("core/avatar",{name:"hpu-blocks-avatar",title:"Avatar",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-avatar"}}),(0,a.registerBlockVariation)("core/block",{name:"hpu-blocks-block",title:"Classic WYSIWYG Editor",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-block"}}),(0,a.registerBlockVariation)("core/button",{name:"hpu-blocks-button",title:"Button",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-button"}}),(0,a.registerBlockVariation)("core/buttons",{name:"hpu-blocks-buttons",title:"Buttons",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-buttons"}}),(0,a.registerBlockVariation)("core/calendar",{name:"hpu-blocks-calendar",title:"Calendar",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-calendar"}}),(0,a.registerBlockVariation)("core/category-list",{name:"hpu-blocks-category-list",title:"Category List",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-category-list"}}),(0,a.registerBlockVariation)("core/code",{name:"hpu-blocks-code",title:"Code",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-code"}}),(0,a.registerBlockVariation)("core/column",{name:"hpu-blocks-column",title:"Column",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-column"}}),(0,a.registerBlockVariation)("core/columns",{name:"hpu-blocks-columns",title:"Columns",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-columns"}}),(0,a.registerBlockVariation)("core/comment-author-name",{name:"hpu-blocks-comment-author-name",title:"Comment Author Name",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comment-author-name"}}),(0,a.registerBlockVariation)("core/comment-content",{name:"hpu-blocks-comment-content",title:"Comment Content",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comment-content"}}),(0,a.registerBlockVariation)("core/comment-date",{name:"hpu-blocks-comment-date",title:"Comment Date",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comment-date"}}),(0,a.registerBlockVariation)("core/comment-edit-link",{name:"hpu-blocks-comment-edit-link",title:"Comment Edit Link",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comment-edit-link"}}),(0,a.registerBlockVariation)("core/comment-reply-link",{name:"hpu-blocks-comment-reply-link",title:"Comment Reply Link",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comment-reply-link"}}),(0,a.registerBlockVariation)("core/comment-template",{name:"hpu-blocks-comment-template",title:"Comment Template",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comment-template"}}),(0,a.registerBlockVariation)("core/comments",{name:"hpu-blocks-comments",title:"Comments",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comments"}}),(0,a.registerBlockVariation)("core/comments-pagination",{name:"hpu-blocks-comments-pagination",title:"Comments Pagination",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comments-pagination"}}),(0,a.registerBlockVariation)("core/comments-pagination-next",{name:"hpu-blocks-comments-pagination-next",title:"Comments Pagination Next",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comments-pagination-next"}}),(0,a.registerBlockVariation)("core/comments-pagination-numbers",{name:"hpu-blocks-comments-pagination-numbers",title:"Comments Pagination Numbers",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comments-pagination-numbers"}}),(0,a.registerBlockVariation)("core/comments-pagination-previous",{name:"hpu-blocks-comments-pagination-previous",title:"Comments Pagination Previous",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comments-pagination-previous"}}),(0,a.registerBlockVariation)("core/comments-title",{name:"hpu-blocks-comments-title",title:"Comments Title",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-comments-title"}}),(0,a.registerBlockVariation)("core/cover",{name:"hpu-blocks-cover",title:"Cover",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-cover"}}),(0,a.registerBlockVariation)("core/details",{name:"hpu-blocks-details",title:"Details",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-details"}}),["wordpress","soundcloud","spotify","flickr","imgur","tumblr","animoto","cloudup","collegehumor","crowdsignal","dailymotion","funnyordie","hulu","kickstarter","meetup-com","mixcloud","photobucket","polldaddy","reddit","reverbnation","screencast","scribd","slideshare","smugmug","speaker-deck","ted","videopress","wordpress-tv"].forEach((e=>{(0,a.unregisterBlockVariation)("core/embed",e)})),(0,a.registerBlockVariation)("core/embed",{name:"hpu-blocks-embed",title:"Embed",isDefault:!0,attributes:{className:"hpu-blocks-embed"}}),(0,a.registerBlockVariation)("core/file",{name:"hpu-blocks-file",title:"File",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-file"}}),(0,a.registerBlockVariation)("core/footnotes",{name:"hpu-blocks-footnotes",title:"Footnotes",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-footnotes"}}),(0,a.registerBlockVariation)("core/form",{name:"hpu-blocks-form",title:"Form",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-form"}}),(0,a.registerBlockVariation)("core/form-input",{name:"hpu-blocks-form-input",title:"Form Input",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-form-input"}}),(0,a.registerBlockVariation)("core/form-submission-notification",{name:"hpu-blocks-form-submission-notification",title:"Form Submission Notification",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-form-submission-notification"}}),(0,a.registerBlockVariation)("core/form-submit-button",{name:"hpu-blocks-form-submit-button",title:"Form Submit Button",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-form-submit-button"}}),(0,a.registerBlockVariation)("core/freeform",{name:"hpu-blocks-freeform",title:"Freeform (New WYSIWYG Editor)",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-freeform"}}),(0,a.registerBlockVariation)("core/gallery",{name:"hpu-blocks-gallery",title:"Gallery",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-gallery"}}),(0,a.registerBlockVariation)("core/group",{name:"hpu-blocks-group",title:"Group",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-group"}}),(0,a.registerBlockVariation)("core/heading",{name:"hpu-blocks-heading",title:"Heading",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-heading"}}),(0,a.registerBlockVariation)("core/home-link",{name:"hpu-blocks-home-link",title:"Home Link",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-home-link"}}),(0,a.registerBlockVariation)("core/html",{name:"hpu-blocks-html",title:"HTML",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-html"}}),(0,a.registerBlockVariation)("core/image",{name:"hpu-blocks-image",title:"Image",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-image"}}),(0,a.registerBlockVariation)("core/latest-comments",{name:"hpu-blocks-latest-comments",title:"Latest Comments",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-latest-comments"}}),(0,a.registerBlockVariation)("core/latest-posts",{name:"hpu-blocks-latest-posts",title:"Latest Posts",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-latest-posts"}}),(0,a.registerBlockVariation)("core/list",{name:"hpu-blocks-list",title:"List",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-list"}}),(0,a.registerBlockVariation)("core/list-item",{name:"hpu-blocks-list-item",title:"List Item",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-list-item"}}),(0,a.registerBlockVariation)("core/loginout",{name:"hpu-blocks-loginout",title:"Login/Logout",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-loginout"}}),(0,a.registerBlockVariation)("core/media-text",{name:"hpu-blocks-media-text",title:"Media & Text",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-media-text"}}),(0,a.registerBlockVariation)("core/more",{name:"hpu-blocks-more",title:"More",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-more"}}),(0,a.registerBlockVariation)("core/navigation",{name:"hpu-blocks-navigation",title:"Navigation",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-navigation"}}),(0,a.registerBlockVariation)("core/navigation-link",{name:"hpu-blocks-navigation-link",title:"Navigation Link",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-navigation-link"}}),(0,a.registerBlockVariation)("core/navigation-submenu",{name:"hpu-blocks-navigation-submenu",title:"Navigation Submenu",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-navigation-submenu"}}),(0,a.registerBlockVariation)("core/nextpage",{name:"hpu-blocks-nextpage",title:"Next Page",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-nextpage"}}),(0,a.registerBlockVariation)("core/page-list",{name:"hpu-blocks-page-list",title:"Page List",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-page-list"}}),(0,a.registerBlockVariation)("core/page-list-item",{name:"hpu-blocks-page-list-item",title:"Page List Item",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-page-list-item"}}),(0,a.registerBlockVariation)("core/paragraph",{name:"hpu-blocks-paragraph",title:"Paragraph",description:"Paragraph with HPU styles and settings",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-paragraph"}}),(0,a.registerBlockVariation)("core/pattern",{name:"hpu-blocks-pattern",title:"Pattern",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-pattern"}}),(0,a.registerBlockVariation)("core/post-author",{name:"hpu-blocks-post-author",title:"Post Author",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-block-post-author"}}),(0,a.registerBlockVariation)("core/post-author-biography",{name:"hpu-blocks-post-author-biography",title:"Post Author Biography",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-post-author-biography"}}),(0,a.registerBlockVariation)("core/post-author-name",{name:"hpu-blocks-post-author-name",title:"Post Author Name",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-post-author-name"}}),(0,a.registerBlockVariation)("core/post-comments-count",{name:"hpu-blocks-post-comments-count",title:"Post Comments Count",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-post-comments-count"}}),(0,a.registerBlockVariation)("core/post-comments-form",{name:"hpu-blocks-post-comments-form",title:"Post Comments Form",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-post-comments-form"}}),(0,a.registerBlockVariation)("core/post-comments-link",{name:"hpu-blocks-post-comments-link",title:"Post Comments Link",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-post-comments-link"}}),(0,a.registerBlockVariation)("core/post-content",{name:"hpu-blocks-post-content",title:"Post Content",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-post-content"}}),(0,a.registerBlockVariation)("core/post-date",{name:"hpu-blocks-post-date",title:"Post Date",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-block-post-date"}}),(0,a.registerBlockVariation)("core/post-excerpt",{name:"hpu-blocks-post-excerpt",title:"Post Excerpt",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-post-excerpt"}}),(0,a.registerBlockVariation)("core/post-featured-image",{name:"hpu-blocks-post-featured-image",title:"Post Featured Image",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-block-post-featured-image"}}),(0,a.registerBlockVariation)("core/post-navigation-link",{name:"hpu-blocks-post-navigation-link",title:"Post Navigation Link",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-post-navigation-link"}}),(0,a.registerBlockVariation)("core/post-tag",{name:"hpu-blocks-post-tag",title:"Post Tag",description:"Post Tag with HPU styles and settings",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-post-tag"}}),(0,a.registerBlockVariation)("core/post-template",{name:"hpu-blocks-post-template",title:"Post Template",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-post-template"}}),(0,a.registerBlockVariation)("core/post-terms",{name:"hpu-blocks-post-terms",title:"Post Terms",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-block-post-terms"}}),(0,a.registerBlockVariation)("core/post-time-to-read",{name:"hpu-blocks-post-time-to-read",title:"Post Time To Read",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-post-time-to-read"}}),(0,a.registerBlockVariation)("core/post-title",{name:"hpu-blocks-post-title",title:"Post Title",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-post-title"}}),(0,a.registerBlockVariation)("core/preformatted",{name:"hpu-blocks-preformatted",title:"Preformatted",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-preformatted"}}),(0,a.registerBlockVariation)("core/pullquote",{name:"hpu-blocks-pullquote",title:"Pullquote",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-pullquote"}}),(0,a.registerBlockVariation)("core/query",{name:"hpu-blocks-query",title:"Query",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-query"}}),(0,a.registerBlockVariation)("core/query-no-results",{name:"hpu-blocks-query-no-results",title:"Query Loop No Results",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-query-no-results"}}),(0,a.registerBlockVariation)("core/query-pagination",{name:"hpu-blocks-query-pagination",title:"Query Loop Pagination",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-query-pagination"}}),(0,a.registerBlockVariation)("core/query-pagination-next",{name:"hpu-blocks-query-pagination-next",title:"Query Loop Pagination Next",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-query-pagination-next"}}),(0,a.registerBlockVariation)("core/query-pagination-numbers",{name:"hpu-blocks-query-pagination-numbers",title:"Query Loop Pagination Numbers",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-query-pagination-numbers"}}),(0,a.registerBlockVariation)("core/query-pagination-previous",{name:"hpu-blocks-query-pagination-previous",title:"Query Loop Pagination Previous",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-query-pagination-previous"}}),(0,a.registerBlockVariation)("core/query-title",{name:"hpu-blocks-query-title",title:"Query Loop Title",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-query-title"}}),(0,a.registerBlockVariation)("core/quote",{name:"hpu-blocks-quote",title:"Quote",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-quote"}}),(0,a.registerBlockVariation)("core/read-more",{name:"hpu-blocks-read-more",title:"Read More",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-read-more"}}),(0,a.registerBlockVariation)("core/rss",{name:"hpu-blocks-rss",title:"RSS",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-rss"}}),(0,a.registerBlockVariation)("core/search",{name:"hpu-blocks-search",title:"Search",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-search"}}),(0,a.registerBlockVariation)("core/separator",{name:"hpu-blocks-separator",title:"Separator",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-separator"}}),(0,a.registerBlockVariation)("core/shortcode",{name:"hpu-blocks-shortcode",title:"Shortcode",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-shortcode"}}),(0,a.registerBlockVariation)("core/site-logo",{name:"hpu-blocks-site-logo",title:"Site Logo",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-site-logo"}}),(0,a.registerBlockVariation)("core/site-tagline",{name:"hpu-blocks-site-tagline",title:"Site Tagline",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-site-tagline"}}),(0,a.registerBlockVariation)("core/site-title",{name:"hpu-blocks-site-title",title:"Site Title",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-site-title"}}),["amazon","bandcamp","behance","chain","codepen","deviantart","dribbble","dropbox","etsy","feed","fivehundredpx","flickr","foursquare","goodreads","google","github","lastfm","linkedin","mail","mastodon","meetup","medium","patreon","pinterest","pocket","reddit","skype","snapchat","soundcloud","spotify","telegram","threads","tumblr","twitch","vimeo","vk","whatsapp","wordpress","x","yelp"].forEach((e=>{(0,a.unregisterBlockVariation)("core/social-link",e)})),(0,a.registerBlockVariation)("core/social-links",{name:"hpu-blocks-social-links",title:"Social Links",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-social-links"}}),(0,a.registerBlockVariation)("core/spacer",{name:"hpu-blocks-spacer",title:"Spacer",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-spacer"}}),(0,a.registerBlockVariation)("core/table",{name:"hpu-blocks-table",title:"Table",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-table"}}),(0,a.registerBlockVariation)("core/table-of-contents",{name:"hpu-blocks-table-of-contents",title:"Table of Contents",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-table-of-contents"}}),(0,a.registerBlockVariation)("core/tag-cloud",{name:"hpu-blocks-tag-cloud",title:"Tag Cloud",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-tag-cloud"}}),(0,a.registerBlockVariation)("core/template-part",{name:"hpu-blocks-template-part",title:"Template Part",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-template-part"}}),(0,a.registerBlockVariation)("core/term-description",{name:"hpu-blocks-term-description",title:"Term Description",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-term-description"}}),(0,a.registerBlockVariation)("core/verse",{name:"hpu-blocks-verse",title:"Verse",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-verse"}}),(0,a.registerBlockVariation)("core/video",{name:"hpu-blocks-video",title:"Video",category:"hpu-blocks",isDefault:!0,attributes:{providerNameSlug:"hpu-blocks",className:"hpu-blocks-video"}})}))}},o={};function a(e){var s=o[e];if(void 0!==s)return s.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=function(t,o,s,r){if(!o){var l=1/0;for(p=0;p<e.length;p++){o=e[p][0],s=e[p][1],r=e[p][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||l>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(i=!1,r<l&&(l=r));if(i){e.splice(p--,1);var u=s();void 0!==u&&(t=u)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[o,s,r]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,r,l=o[0],i=o[1],c=o[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(c)var p=c(a)}for(t&&t(o);u<l.length;u++)r=l[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(p)},o=self.webpackChunkhpu_blocks_core=self.webpackChunkhpu_blocks_core||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var s=a.O(void 0,[431],(function(){return a(102)}));s=a.O(s)}();