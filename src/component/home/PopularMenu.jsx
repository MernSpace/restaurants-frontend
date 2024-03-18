import React, { useEffect, useState } from 'react';
import SectionTitle from '../sectionTitle';
import MenuItem from '../MenuItem';
const PopularMenu = () => {
    const [menu,setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularManue = data.filter(item=>item.category === 'popular');
            setMenu(popularManue);
        })
    },[])
    return (
        <section className='mb-12'>
            <SectionTitle
            heading='FROM OUR MENU'
            subHeading='Check it out'
            />

            <div className='grid md: grid-cols-2 gap-14'>
                {
                    menu.map(item=> <MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>
                    )
                }
            </div>
        </section>
    );
};

export default PopularMenu;