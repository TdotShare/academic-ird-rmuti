import type { NextPage } from 'next'
import { langDisplay } from '../../../../config/lang';

type AppProps = {
    lang: string
};

const Breadcrumb: NextPage<AppProps> = ({ lang = "th" }) => {

    if (!["th", "en"].includes(lang)) {
        lang = "th"
    }

    return (
        <section className="breadcrumb">
            <div className="breadcrumb__shape__v1">
                <img src="./template/images/breadcrumb/element.png" alt="img" />
            </div>
            <div className="breadcrumb__shape__v2">
                <img src="./template/images/breadcrumb/element.png" alt="img" />
            </div>
            <div className="breadcrumb__item">
                <div className="breadcrumb__top">
                    <h2 className="breadcrumb__title">{langDisplay[lang].breadcrumb_namefull}</h2>
                </div>
                <div className="breadcrumb__bottom">
                    <div className="breadcrumb__bar" />
                    <ul className="breadcrumb__list">
                        <li>
                            <a href="index.html">{langDisplay[lang].breadcrumb_organization_name}</a>
                        </li>
                        <li>
                            {langDisplay[lang].breadcrumb_rmuti_name}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb