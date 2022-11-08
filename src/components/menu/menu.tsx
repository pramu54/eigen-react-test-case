import { Menu, MenuProps } from "antd";
import { useState } from "react";
import "antd/lib/menu/style/index.css";

const items: MenuProps['items'] = [
    {
        label: 'All',
        key: 'all',
    },
    {
        label: 'Top Headlines',
        key: 'top',
    },
    {
        label: 'Sources',
        key: 'source',
    },
];

const MenuBar = () => {
    const [current, setCurrent] = useState('all');

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
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