import type { NextPage } from 'next'
import { titleConfig } from '../../../../config/title'

const Atmosphere : NextPage = () => {
    return (
        <section className="whats-included">
            <div className="whats-included__shape">
                <img src="/template/images/whats-included/bg-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section__title">
                            {/* <h3>การทำงาน</h3> */}
                            <h2>รูปภาพฝ่ายของเรา</h2>
                            <p>
                                รูปภาพฝ่ายของ {titleConfig.NameFull}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Atmosphere