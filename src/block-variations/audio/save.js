
//Custom save function
const saveAudio = (props) => {
    const {
        attributes: {
            className,
            autoplay,
            caption,
            loop,
            id,
            src,
            preload,
        },
    } = props;

    return (
        <div className={className}>
            <audio
                controls
                autoPlay={autoplay}
                loop={loop}
                id={id}
                src={src}
                preload={preload}
            >
                {caption}
            </audio>
        </div>
    );
};