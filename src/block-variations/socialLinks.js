import { registerBlockVariation, unregisterBlockVariation } from '@wordpress/blocks';

function hpuBlocksSocialLinks() {
    /**
     * Disable all unused icon variations in the Social Icons block.
     */
    const unusedSocialIcons = [
        'fivehundredpx',
        'amazon',
        'bandcamp',
        'behance',
        'chain',
        'codepen',
        'deviantart',
        'dribbble',
        'dropbox',
        'etsy',
        'feed',
        'flickr',
        'foursquare',
        'goodreads',
        'google',
        'lastfm',
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
        'tumblr',
        'twitch',
        'vimeo',
        'vk',
        'whatsapp',
        'yelp'
    ];
    unusedSocialIcons.forEach((icon) => unregisterBlockVariation('core/social-links', icon));

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
export default hpuBlocksSocialLinks;
