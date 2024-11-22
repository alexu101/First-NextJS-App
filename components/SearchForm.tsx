import Form from "next/form"
import SearchFormReset from "./SearchFormReset";
import { SearchIcon } from "lucide-react";

const SearchForm = () => {
    return (
        <Form action="/" className="search-form">
            <input name="query" className="search" defaultValue={""} placeholder="Search For Startups"/>
            <div className="flex gap-2">
                <SearchFormReset/>
                <button type="submit" className="search-btn text-white">
                    <SearchIcon className="size-5"/>
                </button>
             </div>
        </Form>
    );
}

export default SearchForm