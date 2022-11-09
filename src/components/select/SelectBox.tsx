import { Select } from "antd";
// import "antd/lib/select/style/index.css";
// import "antd/lib/dropdown/style/index.css";

type options = {
    value: string,
    label: string
}

const SelectBox = ({handleChange, options, placeholder}: {handleChange: (value: string) => void, options: options[], placeholder: string}) => {
    return(
        <>
            <Select
                style={{ width: 120 }}
                onChange={handleChange}
                placeholder={placeholder}
                options={options}
            />
        </>
    )
}
export default SelectBox;