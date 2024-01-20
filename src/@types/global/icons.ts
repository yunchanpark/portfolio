interface IconProps {
    width?: number | string;
    height?: number | string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
}

type IconFunction = (props: IconProps) => JSX.Element;

export type { IconProps, IconFunction };
