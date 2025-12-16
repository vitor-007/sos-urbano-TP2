import { useState } from "react";
import Card from "../../components/Cards";
import DetailsModal from "../../components/DetailCard";
import type { Denuncia } from "../../interfaces/Denuncia";

export default function Incident() {
    const denuncias: Denuncia[] = [
        {
            id: 1,
            titulo: "Buraco na Rua",
            status: "Resolvida",
            texto: "Existe um buraco perigoso na Rua das Flores, perto do numero 150. Necessita de reparo urgente.",
            imagemUrl: "https://s2-g1.glbimg.com/BXoCVbSSUMqwk8SrldbMK3pYYbg=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/1/p/JbO1BoTCu5FmmTAWCQvA/cratera-joao-pessoa-bayeux.jpg",
            dataCriacao: "01/05/2025",
            dataResolucao: "10/05/2025",
            local: "Rua das Flores, 150, Centro, Cidade Exemplo"
        },
        {
            id: 2,
            titulo: "Vazamento de Esgoto",
            status: "Pendente",
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in ex rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in ex.",
            imagemUrl: "https://s2-g1.glbimg.com/vqegq0PwmIJTRfK5cd_-cNNRKpg=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/w/g/9uI0WxQPC2YCLSeWEkMA/vazamento-de-agua-foi-registrado-em-rua-do-batel-em-curitiba-na-manha-desta-segunda-feira-27-.jpg",
            dataCriacao: "21/05/2025",
            dataResolucao: "--",
            local: "Rua tal tal tal, Bairro tal tal, cidade tal"
        },
        {
            id: 3,
            titulo: "Vazamento de Esgoto",
            status: "Em andamento",
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in ex rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in ex.",
            imagemUrl: "https://s2-g1.glbimg.com/vqegq0PwmIJTRfK5cd_-cNNRKpg=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/w/g/9uI0WxQPC2YCLSeWEkMA/vazamento-de-agua-foi-registrado-em-rua-do-batel-em-curitiba-na-manha-desta-segunda-feira-27-.jpg",
            dataCriacao: "21/05/2025",
            dataResolucao: "--",
            local: "Rua tal tal tal, Bairro tal tal, cidade tal"
        },
        {
            id: 4,
            titulo: "Vazamento de Esgoto",
            status: "Nao resolvida",
            texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in ex rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in ex.",
            imagemUrl: "https://s2-g1.glbimg.com/vqegq0PwmIJTRfK5cd_-cNNRKpg=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/w/g/9uI0WxQPC2YCLSeWEkMA/vazamento-de-agua-foi-registrado-em-rua-do-batel-em-curitiba-na-manha-desta-segunda-feira-27-.jpg",
            dataCriacao: "21/05/2025",
            dataResolucao: "--",
            local: "Rua tal tal tal, Bairro tal tal, cidade tal"
        }
    ];

    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedDenuncia, setSelectedDenuncia] = useState<Denuncia | null>(null);

    const handleShowModal = (denuncia: Denuncia) => {
        setSelectedDenuncia(denuncia);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedDenuncia(null);
    };

    return (
        <>
            <div style={{ backgroundColor: "#DAEDFF", minHeight: "100vh" }}>
                <div className="container pb-5 pt-3" style={{ backgroundColor: "#DAEDFF" }}>
                    <h1 className="text-center text-primary mb-4">Denuncias</h1>

                    <div className="row g-4 justify-content-center">
                        {denuncias.map((denuncia) => (
                            <div key={denuncia.id} className="col-sm-6 col-lg-6 d-flex">
                                <Card
                                    {...denuncia}
                                    textoBotao="Ver Mais"
                                    onButtonClick={() => handleShowModal(denuncia)}
                                />
                            </div>
                        ))}
                    </div>

                    {selectedDenuncia && (
                        <DetailsModal
                            show={showModal}
                            onClose={handleCloseModal}
                            denuncia={selectedDenuncia}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
