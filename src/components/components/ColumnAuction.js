import React, { Component } from "react";
import Clock from "./Clock";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .de_countdown{
        position: relative;
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
        top: 0;
        left: 0;
        margin-bottom: 20px;
        div{
            display: flex;
            justify-content: center;
        }
        .Clock-days, .Clock-hours, .Clock-minutes{
            margin-right: 10px;
        }
    }
`;


export default class Responsive extends Component {

    dummyData = [{
        deadline: "April, 30, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-1.jpg",
        previewImg: "./img/items/static-1.jpg",
        title: "NFT 1",
        price: "1 EGLD",
    },
    {
        deadline: "April, 30, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-10.jpg",
        previewImg: "./img/items/static-2.jpg",
        title: "NFT 2",
        price: "1 EGLD",
    },
    {
        deadline: "April, 30, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-11.jpg",
        previewImg: "./img/items/static-3.jpg",
        title: "NFT 3",
        price: "1 EGLD",
    },
    {
        deadline: "April, 1, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-12.jpg",
        previewImg: "./img/items/static-4.jpg",
        title: "NFT 4",
        price: "1 EGLD",
    },
    {
        deadline: "April, 30, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-9.jpg",
        previewImg: "./img/items/static-5.jpg",
        title: "NFT 5",
        price: "1 EGLD",
    },
    {
        deadline: "March, 15, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-2.jpg",
        previewImg: "./img/items/static-6.jpg",
        title: "NFT 6",
        price: "1 EGLD",
    },
    {
        deadline: "April, 30, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-3.jpg",
        previewImg: "./img/items/static-7.jpg",
        title: "NFT 7",
        price: "1 EGLD",
    },
    {
        deadline: "April, 30, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-4.jpg",
        previewImg: "./img/items/static-8.jpg",
        title: "NFT 8",
        price: "1 EGLD",
    },
    {
        deadline: "January, 3, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-5.jpg",
        previewImg: "./img/items/static-9.jpg",
        title: "NFT 9",
        price: "1 EGLD",
    },
    {
        deadline: "April, 30, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-7.jpg",
        previewImg: "./img/items/static-10.jpg",
        title: "NFT 10",
        price: "1 EGLD",
    },
    {
        deadline: "April, 30, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/author/author-6.jpg",
        previewImg: "./img/items/static-11.jpg",
        title: "NFT 11",
        price: "1 EGLD",
    }]

    constructor(props) {
        super(props);
        this.state = {
            nfts: this.dummyData.slice(0, 8),
            height: 0
        };
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    loadMore = () => {
        let nftState = this.state.nfts
        let start = nftState.length
        let end = nftState.length + 4
        this.setState({
            nfts: [...nftState, ...(this.dummyData.slice(start, end))]
        });
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
            <>
            <div className='row'>
                <GlobalStyles />
                {this.state.nfts.map((nft, index) => (
                    <div key={index} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                        <div className="nft__item m-0">
                            <div className="nft__item_wrap" style={{ height: `${this.state.height}px` }}>
                                <span>
                                    <img onLoad={this.onImgLoad} src={nft.previewImg} className="lazy nft__item_preview" alt="" />
                                </span>
                            </div>
                            <div className="de_countdown">
                                <Clock deadline={nft.deadline} />
                            </div>
                            <div className="nft__item_info">
                                <span onClick={() => window.open(nft.nftLink, "_self")}>
                                    <h4>{nft.title}</h4>
                                </span>
                                <div className="nft__item_price">
                                    {nft.price}<span>{nft.bid}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {this.state.nfts.length !== this.dummyData.length &&
                    <div className='col-lg-12'>
                        <div className="spacer-single"></div>
                        <span onClick={() => this.loadMore()} className="btn-main lead m-auto">Load More</span>
                    </div>
                }
            </div>
            </>
        );
    }
}