import React from 'react'
import '../style.css'
import Barchart from './Barchart'
import Barchart2 from './Barchart2'
import { BiChart, BiWalletAlt, BiTransferAlt, BiDownload } from "react-icons/bi";
import { BsArrowRepeat, BsSpotify } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { SiNetflix, SiBitcoinsv, SiPlaystation } from "react-icons/si";
import { VscBell } from "react-icons/vsc";
import { RiSettings3Line, RiBillLine } from "react-icons/ri";
import { AiOutlineRightCircle, AiFillAppstore, AiOutlineScan, AiOutlineEllipsis } from "react-icons/ai";
import Pichart from './Pichart';
import img from '../image.jpg'
export default function First() {
    return (
        <>
            <div className="main">

                <div className="grid row justify-content-around">
                    {/* <!-- 1st column --> */}
                    <div className="col-2 ps-0 pe-0   bg-light sidebar">

                        <h4 className="heading1">celengan.</h4>
                        <a href="#" className="alink"><h6 className="sidelink sidelink1"><span className="linkicon"><AiFillAppstore size={20} className="icon" /></span>Dashboard</h6></a>
                        <a href="#" className="alink">  <h6 className="sidelink"><span className="linkicon"><BiChart size={20} className="icon" /></span> Analytic</h6></a>
                        <a href="#" className="alink"> <h6 className="sidelink"><span className="linkicon"><BiWalletAlt size={20} className="icon" /></span>Wallet</h6></a>

                        <a href="#" className="alink"> <h6 className="sidelink">
                            <span className="linkicon"><RiSettings3Line size={20} className="icon" /></span>
                            Setting
                        </h6></a>

                        <div className="imgcontainer">
                            <img src={img} alt="image loading" className="img" />
                            <h5 className="imgname">Ansellma</h5>
                        </div>
                    </div>
                    {/* <div className="col-1 emptycol"></div> */}
                    {/* <!-- 2nd column --> */}
                    <div className="col-10 bg-light bigcol">
                        <div className="row">

                            <div className="col-9 pe-5  incol  incol1">

                                <h4 className="topheading">Hello,<span className="top_ansellma">Ansellma</span></h4>
                                <h6 className="welcome">Welcome back!</h6>


                                {/* <!-- ---X- --> */}
                                <div className="row">
                                    {/* <!-- box1 --> */}

                                    <div className="col-6 barchart box1 bg-light"><Barchart name="Income" sentence="$ 750,00 Money out for this week" /></div>


                                    {/* <!-- box2 --> */}

                                    <div className="col-6 barchart box2 bg-light"><Barchart2 name="Expense" sentence="$ 921,00 Income  for this week" /></div>
                                </div>


                                <br />
                                <div className="row">
                                    {/* <!-- box3 --> */}
                                    <div className="col-12  box3">
                                        <h5 className="box3heading">Upgrade your account to PRO+ <span className="box3icon"><AiOutlineRightCircle size={50} /></span></h5>

                                        <p className="text1">get Exclusive discount fot any payment method by <br /> upgrading your
                                            plan to
                                            premium
                                        </p>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    {/* <!-- box4 --> */}
                                    <div className="col-12  box4">
                                        <h6 className="box4heading">Latest Transaction <span className="box4icon"><AiOutlineEllipsis size={20} /></span></h6>
                                        <table>

                                            <tr className="tablerow">
                                                <td><span><SiNetflix size={35} className="netflix" /></span> Netflix</td>
                                                <td>Apr 29, 2.15 pm</td>
                                                <td className="red">-$ 19.00</td>
                                            </tr>
                                            <tr>
                                                <td><span><BsSpotify size={35} className="spotify" /></span> Spotify</td>
                                                <td>Apr 25, 5.42 am</td>
                                                <td className="red">-$ 14.00</td>
                                            </tr>
                                            <tr>
                                                <td><span><SiBitcoinsv size={35} className="bitcoin" /></span> Bitcoin</td>
                                                <td>Apr 20, 2.15 pm</td>
                                                <td className="green">+$ 125.00</td>
                                            </tr>
                                            <tr>
                                                <td><span><SiPlaystation size={35} className="playstation" /></span> Playstation 5</td>
                                                <td>Apr 29, 2.15pm</td>
                                                <td className="red">-$ 399.0</td>
                                            </tr>
                                        </table>


                                    </div>
                                </div>

                            </div>
                            {/* <!-- ----- X--> */}
                            <div className="col-3  incol incol2  bigcol">
                                <span className="searchlogo"><FiSearch className="topicon" size={30} /></span> <span className="bell_logo"><VscBell size={20} /></span>
                                <br /> <br />

                                <div className="row incol2_row">
                                    <div className="col-12 box5">
                                        <div className="box5conatainer">
                                            <p>Amount Balance <span className="visa">VISA</span></p>
                                            <h4>$ 7831,00</h4>
                                            <p>3756 **** **** 9541</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row incol2_row">
                                    <div className="col-12 ps-0 bg-light box6">
                                        <div className="box6container">
                                            <ul>
                                                <li className="li li1" ><AiOutlineScan size={30} className="box6icons" />
                                                    <p className="box6p">Scan</p></li>

                                                <li className="li li2" ><BiTransferAlt size={30} className="box6icons" />
                                                    <p className="box6p">Transfer</p></li>
                                                <li className="li li3" ><RiBillLine size={30} className="box6icons" />
                                                    <p className="box6p">Bills</p></li>
                                                <li className="li li4" ><BiDownload size={30} className="box6icons" />
                                                    <p className="box6p">Top Up</p></li>




                                            </ul>

                                        </div>



                                    </div>
                                </div>
                                <div className="row incol2_row">
                                    <div className="col-12  box7">
                                        <Pichart />

                                    </div>
                                </div>
                                <div className="row incol2_row">
                                    <div className="col-12 bg-light box8">
                                        <h4 className="box8heading">Conversion</h4>
                                        <span className="box8span">14000</span> <span className="box8input">

                                            <select name="opts" id="random">

                                                <option value="USD">USD</option>
                                                <option value="USD">US</option>
                                                <option value="opts">opts</option>


                                            </select>
                                        </span>
                                        <p className="box8p">Swap <BsArrowRepeat /></p>
                                        <span className="box8span1">201,761,70</span>  <span className="box8input">

                                            <select name="opts" id="random">

                                                <option value="USD">IDR</option>
                                                <option value="USD">US</option>
                                                <option value="opts">opts</option>


                                            </select>
                                        </span>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}
