import { registerBlockVariation, unregisterBlockVariation } from "@wordpress/blocks";

function hpuBlocksEmbeds() {
    const embedVariations = [
        //'youtube',
        //'vimeo',
        //'twitter',
        //'facebook',
        //'instagram',
        'wordpress',
        'soundcloud',
        'spotify',
        'flickr',
        'imgur',
        'tumblr',
        'animoto',
        'cloudup',
        'collegehumor',
        'crowdsignal',
        'dailymotion',
        'funnyordie',
        'hulu',
        'kickstarter',
        'meetup-com',
        'mixcloud',
        'photobucket',
        'polldaddy',
        'reddit',
        'reverbnation',
        'screencast',
        'scribd',
        'slideshare',
        'smugmug',
        'speaker-deck',
        'ted',
        //'tiktok',
        'videopress',
        'wordpress-tv',
    ];

    embedVariations.forEach((embed) => {
        unregisterBlockVariation('core/embed', embed);
    });

    registerBlockVariation(
        'core/embed',
        {
            name: 'hpu-blocks-embed',
            title: 'Embed',
            isDefault: true,
            attributes: {
                className: 'hpu-blocks-embed',
            },
        }
    );


}
export default hpuBlocksEmbeds;