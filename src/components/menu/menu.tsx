import { Menu, MenuProps } from "antd";
import { useState } from "react";
import "antd/lib/menu/style/index.css";
import { useNavigate } from "react-router-dom";

const items: MenuProps['items'] = [
    {
        label: 'All',
        key: '',
    },
    {
        label: 'Top Headlines',
        key: 'headlines',
    },
];

const MenuBar = () => {
    const [current, setCurrent] = useState('all');
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = e => {
        setCurrent(e.key);
        navigate(`/${e.key}`);
    };

    return(
        <> 
            <div className="menu">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[current]}
                    items={items}
                    onClick={onClick}
                />
            </div>
        </>
    )
}
export default MenuBar;