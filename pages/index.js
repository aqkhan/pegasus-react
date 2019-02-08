import React, { Component } from "react";
import '../style.css'
import Home from "../components/home/homeContainer";
import Layout from "../components/layout";
class index extends Component{
    render(){
        return(
            <Layout type={"home"}>
                <Home/>
            </Layout>
        )
    }
}

export default index;
