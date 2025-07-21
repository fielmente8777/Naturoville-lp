import { JSX } from "react";
interface HeadingsProps {
    level: number,
    children: React.ReactNode,
    className?: string
}

const Headings: React.FC<HeadingsProps> = ({children, level, className}) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return (
        <Tag className={`${className} capitalize`}>
            {children}
        </Tag>
    );
}

export default Headings;