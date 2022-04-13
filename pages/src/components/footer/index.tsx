import type { NextPage } from 'next'

const Footer: NextPage = () => {

    return (
        <>
            <footer className="footer">
                {/* Footer top section start */}
                <div style={{ paddingTop: "5%" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <aside className="footer__widget">
                                    <div className="footer__info">
                                        <div className="footer__logo">
                                            <img src="/irdmain_and_logo-02.png" alt="image" />
                                        </div>
                                        <div className="footer__social__link">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-youtube" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-3 col-6">
                                        <aside className="footer__widget wow fadeInUp" data-wow-delay="0.4s">
                                            <h2 className="footer__widget__title">ลิงค์ด่วน</h2>
                                            <ul className="footer__widget__list">
                                                <li><a href="#">กิจกรรม สวพ.</a></li>
                                                <li><a href="#">ประชาสัมพันธ์ สวพ.</a></li>
                                                <li><a href="#">จดหมายข่าว</a></li>
                                                <li><a href="#">เว็บข่าว สวพ.</a></li>
                                            </ul>
                                        </aside>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <aside className="footer__widget wow fadeInUp" data-wow-delay="0.2s">
                                            <h2 className="footer__widget__title">ระบบสารสนเทศ</h2>
                                            <ul className="footer__widget__list">
                                                <li><a href="#">ระบบเก็บข้อมูล Google scholar</a></li>
                                                <li><a href="#">ระบบจองห้องประชุม</a></li>
                                                <li><a href="#">ระบบจองเครื่องมือวิจัย</a></li>
                                                <li><a href="#">ระบบสารสนเทศทั้งหมด</a></li>
                                            </ul>
                                        </aside>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <aside className="footer__widget wow fadeInUp" data-wow-delay="0.3s">
                                            <h2 className="footer__widget__title">หน่วยงานภายใน</h2>
                                            <ul className="footer__widget__list">
                                                <li><a href="#">บริหารงานทั่วไป</a></li>
                                                <li><a href="#">บริการวิชาการ</a></li>
                                                <li><a href="#">วิจัยและพัฒนา</a></li>
                                                <li><a href="#">ทรัพย์สินทางปัญญา</a></li>
                                            </ul>
                                        </aside>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <aside className="footer__widget wow fadeInUp" data-wow-delay="0.5s">
                                            <h2 className="footer__widget__title">ติดต่อเรา</h2>
                                            <ul className="footer__widget__list">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-phone" />
                                                        2535
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-envelope" />
                                                        ird@rmuti.ac.th
                                                    </a>
                                                </li>
                                            </ul>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer top section end */}
                {/* Footer bottom section start */}
                <div className="footer__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="footer__copyright">
                                    <h2>
                                        Copyright <a href="https://ird.rmuti.ac.th/">สถาบันวิจัยและพัฒนา มทร.อีสาน</a> All Rights Reserved
                                        
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer bottom section end */}
            </footer>

        </>


    )
}

export default Footer