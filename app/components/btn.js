export default function Btn({ text, children, className, onClick, href  }) {
    return (
        <a href={href} className={className} onClick={onClick}>
            {text}
            {children}

        </a>
    );
}
