import Search from "./Search";

type HeaderProps = {
    setSearchTerm: (term: string) => void;
};

const Header = ({ setSearchTerm }: HeaderProps) => {
    return (
        <header className="px-8 py-6 bg-black/20 w-full flex justify-between items-center">
            <h1 className="text-4xl font-semibold w-full">Red Hot Chili Peppers</h1>
            <Search setSearchTerm={setSearchTerm} />
        </header>
    );
};

export default Header;
