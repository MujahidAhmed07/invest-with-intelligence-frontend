import React, { useState } from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
} from 'cdbreact';

const SidebarWithActiveState = () => {
    const [activeItem, setActiveItem] = useState('Dashboard'); // Initialize activeItem state with the default active item

    const handleItemClick = (itemName) => {
        setActiveItem(itemName); // Update the activeItem state when an item is clicked
    };

    return (
        <CDBSidebar>
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Contrast</CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <CDBSidebarMenuItem
                        icon="th-large"
                        active={activeItem === 'Dashboard'}
                        onClick={() => handleItemClick('Dashboard')}
                    >
                        Dashboard
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem
                        icon="sticky-note"
                        active={activeItem === 'Components'}
                        onClick={() => handleItemClick('Components')}
                    >
                        Components
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem
                        icon="credit-card"
                        iconType="solid"
                        active={activeItem === 'Metrics'}
                        onClick={() => handleItemClick('Metrics')}
                    >
                        Metrics
                    </CDBSidebarMenuItem>
                </CDBSidebarMenu>
            </CDBSidebarContent>
            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div className="sidebar-btn-wrapper" style={{ padding: '20px 5px' }}>
                    Sidebar Footer
                </div>
            </CDBSidebarFooter>
        </CDBSidebar>
    );
};

export default SidebarWithActiveState;
