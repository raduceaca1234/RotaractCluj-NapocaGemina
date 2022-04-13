import React, { Component } from "react";
import styled from "styled-components";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 100%;
`;

export default class Responsive extends Component {
    dummyData = [
        {
            deadline:"January, 3, 2022",
            authorLink: "#",
            nftLink: "#",
            bidLink: "#",
            authorImg: "./img/author/author-5.jpg",
            previewImg: "./img/items/static-9.jpg",
            title: "Jon Doe",
            price: "Developer",
        },
        {
            deadline:"",
            authorLink: "#",
            nftLink: "#",
            bidLink: "#",
            authorImg: "./img/author/author-7.jpg",
            previewImg: "./img/items/static-10.jpg",
            title: "Jon Doe",
            price: "Artist",
        },
        {
            deadline:"",
            authorLink: "#",
            nftLink: "#",
            bidLink: "#",
            authorImg: "./img/author/author-6.jpg",
            previewImg: "./img/items/static-11.jpg",
            title: "Jon Doe",
            price: "Marketing",
        },{
            deadline:"",
            authorLink: "#",
            nftLink: "#",
            bidLink: "#",
            authorImg: "./img/author/author-6.jpg",
            previewImg: "./img/items/static-11.jpg",
            title: "Jon Doe",
            price: "Marketing",
        }]

  constructor(props) {
    super(props);
    this.state = {
        nfts: this.dummyData,
        height: 0
    };
    this.onImgLoad = this.onImgLoad.bind(this);
    }

     onImgLoad({target:img}) {
        let currentHeight = this.state.height;
        if(currentHeight < img.offsetHeight) {
            this.setState({
                height: img.offsetHeight
            })
        }
    }

 render() {
  return (
    <div className='team'>
        <div style={{height: 300, width: 200}}></div>
    </div>              
    );
}
}


// {this.state.nfts.map( (nft, index) => (
//     <div key={index} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
//         <div className="nft__item_custom">
//             {/* <div className="author_list_pp">
//                 <span onClick={()=> window.open(nft.authorLink, "_self")}>                                    
//                     <img className="lazy" src={nft.authorImg} alt=""/>
//                     <i className="fa fa-check"></i>
//                 </span>
//             </div> */}
//             <div className="nft__item_wrap" style={{height: `${this.state.height}px`}}>
//               <Outer>
//                 <span onClick={()=> window.open(nft.previewLink, "_self")}>
//                     <img onLoad={this.onImgLoad} src={nft.previewImg} className="lazy nft__item_preview" alt=""/>
//                 </span>
//               </Outer>
//             </div>
//             <div className="nft__item_info2">
//                 <span onClick={()=> window.open(nft.nftLink, "_self")}>
//                     <h4>{nft.title}</h4>
//                 </span>
//                 <div className="nft__item_price" style={{}}>
//                     {nft.price}
//                 </div>                      
//             </div> 
//         </div>
//     </div>  
// ))}
