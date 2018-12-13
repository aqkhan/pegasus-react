import  React , { Component } from 'react';
import RequestDemo from '../requestDemo';
import {API_PATH} from '../apiconfig'
import {Carousel} from 'react-bootstrap';
import axios from 'axios'
class  Home extends Component{
    state = {
        pages:null,
        products:null,
        storyOne:"active",
        storyTwo:"",
        storyThree:"",
    }
    componentWillMount() {
        axios.get(API_PATH +'pages')
            .then((res)=>{
                let temp=[];
                res.data.pages.forEach((val)=>{
                    if (val.type==="homepage"){
                        temp.push(val);
                    }
                });
                this.setState({pages:temp})
            })
            .catch(err=>{throw err});

        axios.get(API_PATH +'products')
            .then((res)=>{
                this.setState({products:res.data.products})
            })
            .catch(err=>{throw err})
    }

//    test=(type)=>{
//         switch (type) {
//             case 'one':
//                 this.setState({ storyOne:"active", storyTwo:"", storyThree:"" });
//                 return;
//             case 'two':
//                 this.setState({ storyOne:"", storyTwo:"active", storyThree:"" });
//                 return;
//             case 'three':
//                 this.setState({ storyOne:"", storyTwo:"", storyThree:"active" });
//                 return;
//             default:
//                 return;
//         }
//     }

    render() {
        let product;
        if (this.state.products)
        {
            product =  this.state.products.map((value,index)=>{
                    return index===0 && <section className="odd-product" key={index}>
                                 <section className="second-section">
                            <div className="container custom-container">
                                <div className="row flex">
                                    <div className="PTL-PEGASUS">
                                        <span>{value.title}</span><p>{value.leadText}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row image-container">
                                    <div className="col-sm-4 ms">
                                        <div className="second">
                                            <div dangerouslySetInnerHTML={{__html: value.shortDescription}}></div>
                                            <br/>
                                            <br/>
                                            <h3><b>Specifications</b></h3>
                                            <ul>
                                                {Object.keys(value.spec.name).map((data,indexx)=>{
                                                    return <li key={indexx}><span><b>{value.spec.name[data]}:</b></span><span> </span><span>{value.spec.detail[data]}</span></li>
                                                })}
                                            </ul>

                                        </div>
                                    </div>
                                    <div className="col-sm-8 mn">
                                        <img src={value.featuredImage && value.featuredImage.url} className="image34"/>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </section>
                })}
        let pages;
        if (this.state.pages){
            pages = this.state.pages.map((value, index)=>{
                    return <section className="new-home-cards" key={index}>
                        <section className="section-one" style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(6, 6, 6, 0.72)),url(${value.featuredImage && value.featuredImage.url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",}} >
                            <div className="third-row">
                                <div className="container custom-container">
                                    <div className="row flex">
                                        <div className="header-text">
                                            <p><br/><span>{value.headerImageLable}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="small-upper-line flex">
                                <div className="line"> </div>
                            </div>
                            <div className="fourth-row">
                                <div className="custom-container container">
                                    <div className="row flex">
                                        <div className="flex-column learnmore-header learn-home">
                                            <div className='detail-content'><div dangerouslySetInnerHTML={{__html: value.leadText}}/></div>
                                            <a href="#">
                                                LEARN MORE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
        })}
        return(
            <div>
                {pages}
                    {product}
               
<Carousel>
  <Carousel.Item>
  <div className="section-three-overlay1"/>
    <img width={'auto'} height={500} alt="900x500" src="/static/images/machine.jpg" />
    <Carousel.Caption>
    
                                    
            <div className="slider-text">
                
                        <h1>STORIES</h1><br/>
                        <p>"We all feel a lot better with Pegasus laser
                        therapy. It means a huge difference in quality of life for our
                        horses, particularly as they
                        grow older."</p>
                        <span>- Joanie Matus</span>
                    </div>                    
                                
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="section-three-overlay1"/>
    <img width={'auto'} height={500} alt="900x500" src="/static/images/machine.jpg" />
    <Carousel.Caption>
    
                                    
            <div className="slider-text">
                
                        <h1>STORIES</h1><br/>
                        <p>"We all feel a lot better with Pegasus laser
                        therapy. It means a huge difference in quality of life for our
                        horses, particularly as they
                        grow older."</p>
                        <span>- Joanie Matus</span>
                    </div>                       
                                
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="section-three-overlay1"/>
  <img width={'auto'} height={500} alt="900x500" src="/static/images/machine.jpg" />
    <Carousel.Caption>
    <div className="slider-text">
        
        <h1>STORIES</h1><br/>
        <p>"We all feel a lot better with Pegasus laser
        therapy. It means a huge difference in quality of life for our
        horses, particularly as they
        grow older."</p>
        <span>- Joanie Matus</span>
    </div>   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                <RequestDemo/>
                </div>
        )

}
}
export default Home;
