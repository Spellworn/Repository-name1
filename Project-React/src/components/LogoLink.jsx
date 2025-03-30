export const LogoLink  = ({href, src, className, alt}) => {
    return (
        <a href={href} target="_blank">
            <img src={src} className={className} alt={alt} />
        </a>
    )
}