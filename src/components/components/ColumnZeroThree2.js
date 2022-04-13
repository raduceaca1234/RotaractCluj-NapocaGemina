import React, { Component } from "react";
import styled from "styled-components";
import Clock from "./Clock";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

export default class Responsive extends Component {
    dummyData = [
        {
            deadline: "",
            authorLink: "#",
            nftLink: "#",
            bidLink: "#",
            authorImg: "./img/author/author-6.jpg",
            previewImg: "./img/items/Mihnea.jpg",
            title: "Mihnea Tintea",
            price: "Presedinte",
            bid: "1/20",
            likes: 50
        },
        {
            deadline: "December, 30, 2021",
            authorLink: "#",
            nftLink: "#",
            bidLink: "#",
            authorImg: "./img/author/thumbnail-1.jpg",
            previewImg: "./img/items/Andrei.jpg",
            title: "Andrei Bazavan",
            price: "Vicepresedinte",
            bid: "1/20",
            likes: 50
        },
        {
            deadline: "",
            authorLink: "#",
            nftLink: "#",
            bidLink: "#",
            authorImg: "./img/author/author-11.jpg",
            previewImg: "./img/items/Horia.jpg",
            title: "Horia Mircea Botos",
            price: "Trezorier",
            bid: "1/11",
            likes: 97
        },
        {
            deadline: "",
            authorLink: "#",
            nftLink: "#",
            bidLink: "#",
            authorImg: "./img/author/author-9.jpg",
            previewImg: "./img/items/IoanaC.jpg",
            title: "Ioana Ciobanu",
            price: "Secretar",
            bid: "1/20",
            likes: 50
        },
        {
            deadline: "January, 3, 2022",
            authorLink: "#",
            nftLink: "#",
            bidLink: "#",
            authorImg: "./img/author/author-5.jpg",
            previewImg: "./img/items/Iasmina.jpg",
            title: "Iasmina Orza",
            price: "Public Relations",
            bid: "1/20",
            likes: 50
        },
        {
            deadline: "",
            authorLink: "#",
            nftLink: "#",
            bidLink: "#",
            authorImg: "./img/author/author-7.jpg",
            previewImg: "./img/items/Tudor Reus.jpg",
            title: "Tudor Reus",
            price: "Resp. Relaţii Internaţionale",
            bid: "1/20",
            likes: 50
        },

    ]

    constructor(props) {
        super(props);
        this.state = {
            nfts: this.dummyData,
            height: 0
        };
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    onImgLoad({ target: img }) {
        let currentHeight = this.state.height;
        if (currentHeight < img.offsetHeight) {
            this.setState({
                height: img.offsetHeight
            })
        }
    }

    render() {
        return (
            <div className='row'>
                {this.state.nfts.map((nft, index) => (
                    <div key={index} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="nft__item_custom">
                            {/* <div className="author_list_pp">
                        <span onClick={()=> window.open(nft.authorLink, "_self")}>                                    
                            <img className="lazy" src={nft.authorImg} alt=""/>
                            <i className="fa fa-check"></i>
                        </span>
                    </div> */}
                            <div className="nft__item_wrap" style={{ height: `${this.state.height}px` }}>
                                <Outer>
                                    <span onClick={() => window.open(nft.previewLink, "_self")}>
                                        <img onLoad={this.onImgLoad} src={nft.previewImg} className="lazy nft__item_preview" alt="" />
                                    </span>
                                </Outer>
                            </div>
                            <div className="nft__item_info" style={{ textAlign: "center", marginBottom: 10 }}>
                                <span onClick={() => window.open(nft.nftLink, "_self")}>
                                    <h4>{nft.title}</h4>
                                </span>
                                <div className="nft__item_price">
                            {nft.price}
                        </div>                           
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}