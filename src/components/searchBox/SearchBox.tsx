import { Input, Space } from 'antd';
import "antd/lib/input/style/index.css";

const { Search } = Input;

const SearchBox = ({onSearch}: {onSearch?: React.FC}) => {
    return(
        <>
            <Space direction="vertical">
                <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
            </Space>
        </>
    )
}
export default SearchBox;