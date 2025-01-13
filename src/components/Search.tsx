type SearchProps = {
    setSearchTerm: (term: string) => void;
};

const Search = ({ setSearchTerm }: SearchProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeout(() => {
            setSearchTerm(e.target.value);
        }, 2000);
    };

    return (
        <form action="" className="w-full flex justify-end">
            <input
                className="outline-none rounded-lg w-2/5 px-5 py-3 text-lg"
                type="search"
                name="search"
                id="search"
                placeholder="Search Your Favorite Artist"
                onChange={handleChange}
            />
        </form>
    );
};

export default Search;
