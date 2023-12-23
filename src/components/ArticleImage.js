const ArticleImage = ({ src, alt, description }) => (
    <div>
        <div align='center' class="article-image">
            <img src={src} alt={alt} class="article-img" />
            <br />
            <p><span class="article-image-alt">{description}</span></p>
        </div>
    </div>
);

export default ArticleImage;