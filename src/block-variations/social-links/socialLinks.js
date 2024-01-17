import { registerBlockVariation, unregisterBlockVariation } from '@wordpress/blocks';
import './socialLinks.sass';

export default function registerCoreSocialLinksBlockVariations() {    
    // SocialLink.icon = () => {
    //     return null;
    // };

    /**
     * Disable all unused icon variations in the Social Icons block.
     * Comment out the icons you want to keep.
     */
    const unusedSocialIcons = [
        'amazon',
        'bandcamp',
        'behance',
        'chain',
        'codepen',
        'deviantart',
        'dribbble',
        'dropbox',
        'etsy',
        // 'facebook',
        'feed',
        'fivehundredpx',
        'flickr',
        'foursquare',
        'goodreads',
        'google',
        'github',
        // 'instagram',
        'lastfm',
        'linkedin',
        'mail',
        'mastodon',
        'meetup',
        'medium',
        'patreon',
        'pinterest',
        'pocket',
        'reddit',
        'skype',
        'snapchat',
        'soundcloud',
        'spotify',
        'telegram',
        'threads',
        // 'tiktok',
        'tumblr',
        'twitch',
        // 'twitter',
        'vimeo',
        'vk',
        'whatsapp',
        'wordpress',
        'x',
        'yelp',
        // 'youtube',
    ];

    unusedSocialIcons.forEach((icon) => { unregisterBlockVariation('core/social-link', icon); });

    // then register social links block variation
    registerBlockVariation('core/social-links', {
        name: 'hpu-blocks-social-links',
        title: 'Social Links',
        category: 'hpu-blocks',
        isDefault: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-social-links',
        }
    });
}
