import { Input, Space } from 'antd';
// import "antd/lib/input/style/index.css";
import { searchType } from './type/SearchBoxTypes';

const { Search } = Input;

const SearchBox = ({onChange, onPressEnter, onSearch}: searchType) => {
    return(
        <>
            <Space direction="vertical">
                <Search placeholder="Please enter a keyword" allowClear onChange={onChange} onPressEnter={onPressEnter} onSearch={onSearch} style={{ width: 500 }} />
            </Space>
        </>
    )
}
export default SearchBox;