import { Layout } from "antd";
import React, { ReactNode } from "react";
import MenuBar from "../components/menu/menu";
import "antd/lib/layout/style/index.css";
import "./style/layout.css";

const { Header, Content, Footer } = Layout;

const LayoutProvider = ({content}: {content: ReactNode}) => {
    return(
        <>
            <Layout className="layout">
                <Header className="header">
                    <div className="logo" />
                    <MenuBar />
                </Header>
                <Content>
                    <div className="site-layout-content" style={{minHeight: '100vh'}}>
                        {content}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Moh Adi Pramudiono - Frontend</Footer>
            </Layout>
        </>
    )
}
export default LayoutProvider;