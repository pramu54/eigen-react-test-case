import { Pagination } from "antd";
import "antd/lib/pagination/style/index.css";

const Paginations = ({total, onShowSizeChange, onChange}: {total: number, onShowSizeChange: (current: number, pageSize : number) => void, onChange: (page:number)=>void}) => {
    return(
        <>
            <Pagination 
                showSizeChanger
                defaultCurrent={1} 
                defaultPageSize={10}
                onShowSizeChange = {onShowSizeChange}
                total={total}
                onChange={onChange}
            />
        </>
    )
}
export default Paginations;