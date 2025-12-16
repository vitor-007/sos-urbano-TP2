import styles from "./Home.module.css";
import imgDesperdicio from "../../assets/img-home/Img-desperdicio.png";
import imgMascote from "../../assets/img-home/mascote-inclinado-com-uma-mao-e-um-dedo-erguido.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.page}>
                <div className="container">
                    <div className="row mt-3">
                        <div className={`col-12 col-sm-6 ${styles["text-near-image"]} d-flex flex-column justify-content-center align-items-start`}>
                            <p>
                                Temos como iniciativa a criacao de uma plataforma interativa e de facil uso para voce denunciar algum vasamento de agua em sua regiao. Ficou interessado? Clique no botao abaixo para ver as denuncias cadastradas.
                            </p>
                            <button onClick={() => navigate("/incident")} className="btn btn-primary">Ver Denúncias</button>
                        </div>
                        <div className={`col-12 col-sm-6 ${styles["img-near-text"]} d-flex justify-content-center align-items-center`}>
                            <img
                                src={imgDesperdicio}
                                alt="desenho de homem ajoelhado de frente a uma torneira grande caindo uma gota"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    <div className={`row ${styles["text-main-below-image"]}`}>
                        <div className="col-12 text">
                            <strong>Ajude a preservar nosso recurso mais precioso!</strong>
                            Denuncie vazamentos de agua em sua regiao de forma rapida e facil. Juntos, podemos combater o desperdicio e proteger o meio ambiente. Use nossa plataforma para fazer a diferenca, porque cada gota conta!
                        </div>
                    </div>

                    <div className="row mt-4 mb-4">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <img
                                src={imgMascote}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        <div className={`col-6 ${styles["text-near-image"]} d-flex flex-column justify-content-center align-items-start`}>
                            <p>
                                Deseja ver as denúncias na sua cidades?
                            </p>
                            <button onClick={() => navigate("/login")} className={`btn btn-primary ${styles["btn-near-mascot"]}`}>Cadastrar-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
