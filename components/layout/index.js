import React, {Component} from "react";
import Header from "../header/headerContainer";
import Footer from "../footer";

class index extends Component {

    state = {
        type: null
    };

    componentWillMount() {
        this.setState({type: this.props.type})
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({type: nextProps.type})
    }

    render() {
        let {type} = this.state;
        return (
            <section>
                <Header type={type}/>
                {this.props.children}
                <Footer/>
            </section>
        )
    }
}

export default index;
