const Image = ({ src, alt }) => {
    if (!src) return;
    return <img src={src} alt={alt || 'img'} onError={(event) => (event.target.style.display = 'none')} />;
};

export default Image;
