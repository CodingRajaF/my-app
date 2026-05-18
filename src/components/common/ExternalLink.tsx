import Link from "next/link";

type LinkProps = {
    href: string;
    children?: React.ReactNode;
    ariaLabel?: string;
    className?: string;
    key?: string;
};

export const ExternalLink = ({
    href,
    children,
    ariaLabel,
    className,
    key,
}: LinkProps) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={className}
            key={key}
        >
            {children}
        </Link>
    );
};
