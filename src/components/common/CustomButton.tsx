type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
};
export const CustomButton = ({ children, onClick }: ButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="text-3xl p-2 transition hover:scale-120 active:scale-95 duration-500"
        >
            {children}
        </button>
    );
};
