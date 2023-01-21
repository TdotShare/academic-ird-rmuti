import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { TAPIdata, User } from '../../../../data/user';
import { langDisplay } from '../../../../config/lang';

type AppProps = {
    lang : string
};


const Team: NextPage <AppProps> = ({ lang = "th" }) => {

    if (!["th", "en"].includes(lang)) {
        lang = "th"
    }

    const [model, setModel] = useState<User[]>([])

    const actionGetTeam = async () => {
        try {
            const resp = await axios.get<TAPIdata>(`https://mis-ird.rmuti.ac.th/service/hrird/api/board/get/8`);

            if (resp.data.bypass) {

                //console.log(resp.data.data)
                setModel(resp.data.data)

            } else {

            }

        } catch (error) {

        }
    }

    useEffect(() => {
        actionGetTeam()
    }, [])

    return (
        <section className="team__block__v2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section__title section__title--white">
                            <h2>{langDisplay[lang].personnel_our_people}</h2>
                            <p> {langDisplay[lang].personnel_department_personnel} {langDisplay[lang].breadcrumb_namefull}
                            {langDisplay[lang].personnel_list} </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card card-outline card-primary shadow p-3 mb-5 rounded">
                            <div className="card-body">
                                <div className='row'>
                                    {
                                        model.length !== 0 ?

                                            model.map((item, i) => {
                                                return (
                                                    <div key={i} className="col-sm-12 col-md-6 col-lg-4" style={{ cursor: "pointer", textAlign: 'center', paddingBottom: "1%" }}>
                                                        <div className={`card  shadow-sm rounded ${item.headdraw === 1 ? "bg-secondary" : "bg-light"}`}>
                                                            <div className="card-body">
                                                                <a rel="noreferrer" target="_blank" href={`https://www.mis-ird.rmuti.ac.th/evaluation/upload/profile/full/${item.pic_path}/${item.pic_name}`} >
                                                                    <img className={`img-fluid img-thumbnail`} style={{ width: `40%` }} src={`https://www.mis-ird.rmuti.ac.th/evaluation/upload/profile/thumb/${item.pic_path}/${item.pic_name}`} alt={`${item.pic_path}`} />
                                                                </a>
                                                                <br />
                                                                <span className={`${item.headdraw === 1 ? "text-light" : "text-dark"}`} onClick={() => { }} >{item.fullname}  <br /> {item.position}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                            :

                                            <div className="d-flex justify-content-center">
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team