import { Input, Space } from 'antd';
import "antd/lib/input/style/index.css";
import { KeyboardEventHandler } from 'react';

const { Search } = Input;

export type searchType = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    onPressEnter: KeyboardEventHandler
}

const SearchBox = ({onChange, onPressEnter}: searchType) => {
    return(
        <>
            <Space direction="vertical">
                <Search placeholder="input search text" allowClear onChange={onChange} onPressEnter={onPressEnter} style={{ width: 200 }} />
            </Space>
        </>
    )
}
export default SearchBox;