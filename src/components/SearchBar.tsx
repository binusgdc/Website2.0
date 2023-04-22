import { FormEvent } from "react"

export type SearchBarProps = {
    placeholder: string | undefined
    onSearch: (searchText: string) => void
}

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
    const key = "searchText"
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const searchText = new FormData(e.target as HTMLFormElement).get(key)
        if (searchText && searchText.toString().length > 0) {
            onSearch(searchText.toString())
        }
    }
    return (
        <form className="mt-8 flex items-center" onSubmit={handleSubmit}>
            <label htmlFor="simple-search" className="sr-only">
                Search
            </label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <label htmlFor="simple-search" className="sr-only">
                        Search
                    </label>
                </div>
                <input
                    type="text"
                    id="simple-search"
                    name={key}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
                    placeholder={placeholder}
                    required
                />
            </div>
            <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-primary_yellow rounded-lg border border-white hover:bg-light_yellow focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
    )
}

export default SearchBar
