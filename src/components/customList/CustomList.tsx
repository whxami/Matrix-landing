import React from 'react';
import CustomListItem from './CustomListItem';

export interface Item {
    title: string;
    description: string;
}

export interface MenuItemData {
    items: Item[];
    activeIndex: number | null;
    setActiveIndex: (index: number | null) => void;
}

const CustomList: React.FC<MenuItemData> = (props) => {
    return (
        <div>
            {props.items.map((item, index) => (
                <CustomListItem
                    key={index}
                    index={index}
                    title={item.title}
                    description={item.description}
                    activeIndex={props.activeIndex}
                    setActiveIndex={props.setActiveIndex}
                />
            ))}
        </div>
    );
};

export default CustomList;
