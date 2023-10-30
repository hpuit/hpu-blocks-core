import { registerBlockVariation, unregisterBlockVariation } from '@wordpress/blocks';
import { SocialLink } from '@wordpress/block-library';

function hpuBlocksSocialLinks() {
    
    SocialLink.icon = () => {
        return null;
    };

    /**
     * Disable all unused icon variations in the Social Icons block.
     * Comment out the icons you want to keep.
     */
    const unusedSocialIcons = [
        AmazonIcon,
        BandcampIcon,
        BehanceIcon,
        ChainIcon,
        CodepenIcon,
        DeviantArtIcon,
        DribbbleIcon,
        DropboxIcon,
        EtsyIcon,
        //FacebookIcon,
        FeedIcon,
        FivehundredpxIcon,
        FlickrIcon,
        FoursquareIcon,
        GoodreadsIcon,
        GoogleIcon,
        GitHubIcon,
        //InstagramIcon,
        LastfmIcon,
        LinkedInIcon,
        MailIcon,
        MastodonIcon,
        MeetupIcon,
        MediumIcon,
        PatreonIcon,
        PinterestIcon,
        PocketIcon,
        RedditIcon,
        SkypeIcon,
        SnapchatIcon,
        SoundCloudIcon,
        SpotifyIcon,
        TelegramIcon,
        ThreadsIcon,
        //TiktokIcon,
        TumblrIcon,
        TwitchIcon,
        //TwitterIcon,
        VimeoIcon,
        VkIcon,
        WhatsAppIcon,
        WordPressIcon,
        XIcon,
        YelpIcon,
        //YouTubeIcon,
    ];

    unusedSocialIcons.forEach((icon) => { unregisterBlockVariation('core/social-link', icon.name); });

    // then register social links block variation
    registerBlockVariation('core/social-links', {
        name: 'hpu-blocks-social-links',
        title: 'Social Links',
        category: 'hpu-blocks',
        isDefault: true,
        isActive: true,
        attributes: {
            providerNameSlug: 'hpu-blocks',
            className: 'hpu-blocks-social-links',
        }
    });
}
export default hpuBlocksSocialLinks;