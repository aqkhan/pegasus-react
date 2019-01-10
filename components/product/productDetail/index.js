import React, { Component } from 'react';
import Link from 'next/link'
import axios from 'axios';
import {API_PATH} from '../../apiconfig';
import ScrollableAnchor from 'react-scrollable-anchor';
import RequestDemo from "../../requestDemo";

class ProductDetail extends Component{
    state ={
        product: null,
        err: null,
        slug:null,
        products: null
    };

    componentWillMount(){
        let slug =this.props.slug;
        this.apiCall(slug);
    }
    // componentWillReceiveProps(nextProps, nextContext) {
    //     let slug =nextProps.slug;
    //     this.apiCall(slug);
    // }

    apiCall(slug){
        axios.get(API_PATH +'products/'+slug)
            .then((res)=>{
                this.setState({product:res.data.product, slug:slug})
            })
            .catch(err=>{
                this.setState({err:err})
            })
        axios.get(API_PATH +'products')
            .then((res)=>{
                this.setState({products:res.data.products})
            })
            .catch(err=>{
                this.setState({err:err})
            })
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextState.slug !== this.state.slug || nextState.products!==this.state.products
    }

    render() {
        let {product,err,slug,products} = this.state;
        let detailProduct=null;
        let allProducts=null;
        let allProductCards=null;
        if (product){
            {
                    if (product.slug===slug){
                       detailProduct = (
                          <div key={product._id}>
                              <div className="third-row">
                                  <div className="container custom-container">
                                      <div className="row flex">
                                          <div className="header-text">
                                              <p><span>{product.leadText}</span></p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="container custom-container header-stg">
                                      <div className="row flex">
                                          <div className="header-image">
                                              <img src={product.featuredImage && product.featuredImage.url} className="head-img1" data-toggle="modal" data-target="#myModal20"/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="fourth-row text-area">
                                  <div className="overlay-section">
                                      <div className=" container">
                                          <div className="row ">
                                              <div className="col-sm-4 p-0">
                                                  <div className="SPECIFICATIONS">
                                                      <h1>SPECIFICATIONS</h1>
                                                      <div className="text-specification">
                                                          <ul>
                                                              {Object.keys(product.spec.name).map((data,index)=>{
                                                                  return <li key={index}><span><b>{product.spec.name[data]}:</b></span><span> </span><span>{product.spec.detail[data]}</span></li>
                                                              })}
                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="col-sm-8 ">
                                                  <div className=" learnmore-header">
                                                      <div className='detail-content'>
                                                          <div  dangerouslySetInnerHTML={{__html: product.longDescription}}></div></div>
                                                      <br/>
                                                      <br/>
                                                      <div className="button">
                                                          <a href="#requestDemo">REQUEST A DEMO</a>
                                                          <a href="#">TALK TO A REP </a>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        )
                    }
            }
        }
        if (products) {
            allProducts=products.map(value=>{
                    return value.slug!==slug &&(
                        <div key={value._id}>
                                    <div className="col-sm-4" >
                                        <div className="image-margin">
                                            <img src={value.featuredImage && value.featuredImage.url} height="320" width="320"/>
                                            <div className="view-text">
                                                <h1>{value.title}</h1>
                                                <p><Link href={"/product/"+value.slug}><a onClick={()=>this.apiCall(value.slug)}>VIEW PRODUCT</a></Link></p>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    )
            });
            allProductCards=products.map(value=>{
                return <div className="col-md-4 p-0 " key={value._id} style={{
                    background: `linear-gradient(rgba(239, 184, 23, 0.1), rgba(239, 184, 23, 0.1)),url(${value.featuredImage && value.featuredImage.url})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100%",
                    border:"1px solid #efb817",
                }}>
                    <div className="image-container">
                        <div className="image-overlay"/>
                        {/*<img src={value.featuredImage && value.featuredImage.url} className="image"/>*/}
                    <Link href={"/product/"+value.slug}><a>
                        <div className="overlay" onClick={()=>this.apiCall(value.slug)}>
                            <div className="text">
                                <h5>{value.title}</h5>
                            </div>
                        </div></a></Link>
                    </div>
                </div>
            })
        };
        return(
            err?<div>
                <section className="product-det">
                    <section className="first-section">
                        <div className="third-row">
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="header-text">
                                        <p><span>Product Not found</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="header-image" style={{background :'black'}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <RequestDemo/>
            </div>:product?
                <div>
                    <section className="product-det">
                        <section className="first-section">
                            <div>
                                {detailProduct}
                            </div>
                             <div className="yellow-section">
                            <div className="container custom-container">
                                <div className="row view-area">
                                    <div className="col-sm-2"></div>

                                    {allProducts}
                                    <div className="col-sm-2"></div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row flex">
                                    <h1 className="prodct">PRODUCTS</h1>
                                </div>
                            </div>
                        </div>
                        </section>
                    </section>
                    <section  className="cards-section">
                        <section className="Second-section">
                            <div className="container custom-container">
                                <div className="row images-flex">
                                    {allProductCards && allProductCards}
                                    {/*<div className="col-sm-6 col-lg-3 p-0 ">*/}
                                        {/*<div className="image-container">*/}
                                            {/*<div className="image-overlay"/>*/}
                                            {/*<img src="/static/images/doctorwithhourse.jpg" className="image"/>*/}
                                            {/*<div className="overlay">*/}
                                                {/*<div className="text">*/}
                                                    {/*<p>08.12.19</p>*/}
                                                    {/*<h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-6 col-lg-3 p-0">*/}
                                        {/*<div className="image-container">*/}
                                            {/*<img src="/static/images/straight-egyptian-arabians-horse.jpg" className="image"/>*/}
                                            {/*<div className="overlay">*/}
                                                {/*<div className="text">*/}
                                                    {/*<p>08.12.19</p>*/}
                                                    {/*<h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-6 col-lg-3 p-0">*/}

                                        {/*<div className="image-container">*/}
                                            {/*<img src="/static/images/whitehourse.jpg" className="image"/>*/}
                                            {/*<div className="overlay">*/}
                                                {/*<div className="text">*/}
                                                    {/*<p>08.12.19</p>*/}
                                                    {/*<h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-6 col-lg-3 p-0">*/}

                                        {/*<div className="image-container">*/}
                                            {/*<img src="/static/images/695128.jpg" className="image" />*/}
                                            {/*<div className="overlay">*/}
                                                {/*<div className="text">*/}
                                                    {/*<p>08.12.19</p>*/}
                                                    {/*<h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-6 col-lg-3 p-0">*/}

                                        {/*<div className="image-container">*/}
                                            {/*<img src="/static/images/straight-egyptian-arabians-horse.jpg" className="image"/>*/}
                                            {/*<div className="overlay">*/}
                                                {/*<div className="text">*/}
                                                    {/*<p>08.12.19</p>*/}
                                                    {/*<h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-6 col-lg-3 p-0">*/}

                                        {/*<div className="image-container">*/}
                                            {/*<img src="/static/images/345446.jpg" className="image"/>*/}
                                            {/*<div className="overlay">*/}
                                                {/*<div className="text">*/}
                                                    {/*<p>08.12.19</p>*/}
                                                    {/*<h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-6 col-lg-3 p-0">*/}

                                        {/*<div className="image-container">*/}
                                            {/*<img src="/static/images/British-Horse-Racing-Frankel-Jockey-Wallpaper.jpg"*/}
                                                 {/*className="image"/>*/}
                                            {/*<div className="overlay">*/}
                                                {/*<div className="text">*/}
                                                    {/*<p>08.12.19</p>*/}
                                                    {/*<h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-sm-6 col-lg-3 p-0">*/}

                                        {/*<div className="image-container">*/}
                                            {/*<div className="image-overlay"></div>*/}
                                            {/*<img src="/static/images/hourse.jpg" className="image"/>*/}
                                            {/*<div className="overlay">*/}
                                                {/*<div className="text">*/}
                                                    {/*<p>08.12.19</p>*/}
                                                    {/*<h5>FEATURED <br/>CONTENT <br/>TITLE HERE</h5>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}

                                    {/*</div>*/}

                                </div>
                            </div>
                            <div className="container">
                                {/*<!-- The Modal -->*/}
                                <div className="modal fade" id="myModal20">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content modal-content-product">
                                            {/*<!-- Modal Header -->*/}
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            {/*<!-- Modal body -->*/}
                                            <div className="modal-body">
                                                <img src={product.featuredImage && product.featuredImage.url}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                <ScrollableAnchor id={'requestDemo'}>
                <RequestDemo/>
                </ScrollableAnchor>
            </div>:<div>
                    <section className="product-det">
                        <section className="first-section">
                            <div className="third-row">
                                <div className="container custom-container">
                                    <div className="row flex">
                                        <div className="header-text">
                                            <p><span>Loading ...</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="container custom-container">
                                    <div className="row flex">
                                        <div className="header-image" style={{background :'black'}}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </section>
                    <RequestDemo/>
                </div>
        )
    }
}

export default ProductDetail;
