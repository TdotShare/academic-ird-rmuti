import type { NextPage } from 'next'
import { titleConfig } from '../../../../config/title'

const Breadcrumb: NextPage = () => {
    return (
        <section className="breadcrumb">
            <div className="breadcrumb__shape__v1">
                <img src="template/images/breadcrumb/element.png" alt="img" />
            </div>
            <div className="breadcrumb__shape__v2">
                <img src="template/images/breadcrumb/element.png" alt="img" />
            </div>
            <div className="breadcrumb__item">
                <div className="breadcrumb__top">
                    <h2 className="breadcrumb__title">{titleConfig.NameFull}</h2>
                </div>
                <div className="breadcrumb__bottom">
                    <div className="breadcrumb__bar" />
                    <ul className="breadcrumb__list">
                        <li>
                            <a href="index.html">{titleConfig.OrganizationName}</a>
                        </li>
                        <li>
                            {titleConfig.RmutiName}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb