import type { NextPage } from 'next'

const Header: NextPage = () => {
    return (
        <header className="header header__bg">

            <div className="header__main__menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <div className="header__logo">
                                <a href="index.html">
                                    <img src="./irdmain_and_logo-02.png" alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <nav className="header__menu">
                                <ul className="main-menu main-menu-white">
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://ird.rmuti.ac.th/main/">หน้าหลัก สวพ.</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://mis-ird.rmuti.ac.th/hr/system/psoffice">บุคลากร สวพ.</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://mis-ird.rmuti.ac.th/main">ระบบสารสนเทศของเรา</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://ird.rmuti.ac.th/2020/world/downloads">ดาวน์โหลดเอกสาร</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://ird.rmuti.ac.th/main/archives/2039">ติดต่อเรา</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            <div className="header__mobile__menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header__mobile__menu__item">
                                <div className="header__logo">
                                    <a href="index.html">
                                        <img src="./irdmain_and_logo-02.png" alt="Logo" />
                                    </a>
                                </div>
                                <div className="header__mobile__button">
                                    <button data-trigger="#navbar_main" className="d-lg-none btn-menu-bars" type="button">
                                        <i className="fa fa-bars" />
                                    </button>
                                    <nav id="navbar_main" className="mobile-offcanvas navbar">
                                        <div className="offcanvas-header">
                                            <button className="mobile__menu__close">×</button>
                                        </div>
                                        <ul className="navbar-nav mobile-menu">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">หน้าหลัก สวพ.</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">บุคลากร สวพ.</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">ระบบสารสนเทศของเรา</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">ดาวน์โหลดเอกสาร</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">ติดต่อเรา</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </header>

    )
}

export default Header