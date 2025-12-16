//import styles from "./DetailCard.module.css";
import type { Denuncia } from "../../interfaces/Denuncia";

interface DetailsModalProps {
    show: boolean;
    onClose: () => void;
    denuncia: Denuncia;
}

export default function DetailsModal({ show, onClose, denuncia }: DetailsModalProps) {
    if (!show || !denuncia) return null;

    const getStatusBadgeClass = (currentStatus: string) => {
        switch (currentStatus) {
            case "Resolvida": return "bg-success";
            case "Pendente": return "bg-warning text-light";
            case "Em Andamento": return "bg-info text-dark";
            case "Urgente": return "bg-danger";
            default: return "bg-secondary";
        }
    };
    
    const headerStyle = {
        backgroundColor: '#ffffffff', 
        color: 'black',
        borderTopLeftRadius: 'calc(.3rem - 1px)',
        borderTopRightRadius: 'calc(.3rem - 1px)',
        borderBottom: '2px solid #ffffffff'
    };


    return (

        <div className="modal fade show d-block rounded-2" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    

                    <div className="modal-header" style={headerStyle}>
                        <h5 className="modal-title text-center w-100" style={{ fontWeight: 'bold' }}>
                            {denuncia.titulo}
                        </h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close" style={{ filter: 'invert(1)', opacity: 1, boxShadow: 'none' }}></button>
                    </div>


                    <div className="modal-body p-1">
                        {denuncia.imagemUrl && (
                            <img 
                                src={denuncia.imagemUrl} 
                                className="img-fluid img-thumbnail rounded-3" 
                                alt={denuncia.titulo} 
                                style={{ 
                                    borderTopLeftRadius: 'calc(.3rem - 1px)', 
                                    borderTopRightRadius: 'calc(.3rem - 1px)' 
                                }}
                            />
                        )}

                        <div className="p-4">

                            <span className={`badge ${getStatusBadgeClass(denuncia.status)} fs-6`}>
                                {denuncia.status}
                            </span>
                            
                            <p className="mt-3">
                                <strong style={{ fontWeight: 'bold' }}>Descrição:</strong>
                                {denuncia.texto}
                            </p>

                            <p className="mb-1">
                                <strong style={{ fontWeight: 'bold' }}>Data de criação:</strong> {denuncia.dataCriacao}
                            </p>
                            <p className="mb-1">
                                <strong style={{ fontWeight: 'bold' }}>Data de resolução:</strong> {denuncia.dataResolucao}
                            </p>
                            <p>
                                <strong style={{ fontWeight: 'bold' }}>Local:</strong> {denuncia.local}
                            </p>
                        </div>
                    </div>


                    <div className="modal-footer justify-content-center border-0 p-3">
                        <button 
                            type="button" 
                            className="btn btn-lg btn-danger w-75" 
                            onClick={onClose}
                            style={{ backgroundColor: '#a52a2a', borderColor: '#a52a2a' }} // Cor vermelha-escura
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}