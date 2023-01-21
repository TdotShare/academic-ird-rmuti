import type { NextPage } from 'next'
import { langDisplay } from '../../../../config/lang';
import { workType } from '../../../../data/work';


type AppProps = {
    workdata: workType
    lang : string
};

const Ourwork: NextPage<AppProps> = ({ workdata , lang = "th" }) => {

    if (!["th", "en"].includes(lang)) {
        lang = "th"
    }

    return (
        <section className="whats-included">
            <div className="whats-included__shape">
                <img src="./template/images/whats-included/bg-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section__title">
                            <a href='https://ird.rmuti.ac.th/main/wp-content/uploads/2021/07/0001-scaled.jpg' target={'_blank'} rel="noreferrer" >
                                <h3>{langDisplay[lang].ourwork_structure}</h3>
                            </a>
                            <h2>{langDisplay[lang].ourwork_myjob}</h2>
                            <p>
                                {langDisplay[lang].ourwork_department_work} {langDisplay[lang].breadcrumb_namefull} {langDisplay[lang].ourwork_list}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        workdata ? workdata.data.map(({ id , title , detail}) => {
                            return  (
                                <div key={id} className="col-lg-6 col-md-6">
                                    <div className="whats-included__item wow fadeInUp" data-wow-delay=".2s">
                                        <div className="whats-included__item__icon">
                                            <img className="bg-shape" src="./template/images/whats-included/bg-icon-03.png" alt="img" />
                                            <img className="svg-icon" src="./template/images/whats-included/3.svg" alt="img" />
                                        </div>
                                        <div className="whats-included__item__text">
                                            <h2 className="whats-included__item__title">{title}</h2>
                                            <p className="whats-included__item__desc">
                                                {detail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                        :

                        <></>
                    }
                </div>
            </div>
        </section>

    )
}

export default Ourwork