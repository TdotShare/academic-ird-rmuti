import type { NextPage } from 'next'
import { langDisplay } from '../../../../config/lang';


type AppProps = {
    lang : string
};


const Atmosphere : NextPage <AppProps> = ({ lang = "th" }) => {

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
                            <h2>{langDisplay[lang].picture_our_department}</h2>
                            <p>
                                {langDisplay[lang].picture_of} {langDisplay[lang].breadcrumb_namefull}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Atmosphere