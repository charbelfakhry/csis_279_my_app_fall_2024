import React from "react";

const CustDropdown = ({options, onSelectedItem}) => {
    return(
        <>
            <select onChange={onSelectedItem}>
                {options.map((item, index)=>{
                    return(
                        <option key={index} value={item.value}>{item.label}</option>
                    );
                })}
            </select>
        </>
    )
};

export default CustDropdown;