//import styles from "./Card.module.css";
import type { Denuncia } from '../../interfaces/Denuncia';

interface CardProps extends Denuncia {
    textoBotao: string;
    onButtonClick: () => void;
}

export default function Card(props: CardProps) {
    const { 
        titulo, 
        textoBotao, 
        imagemUrl,
        status ,
        onButtonClick 
    } = props;

    const getStatusBadgeClass = (currentStatus : string) => {
        switch (currentStatus) {
            case "Resolvida": return "bg-success";
            case "Pendente": return "bg-warning text-light";
            case "Em Andamento": return "bg-info text-dark";
            case "Não resolvida": return "bg-danger";
            default: return "bg-secondary";
        }
    };

    return (
        <div className="card shadow-sm rounded-3">
            
            <div className="card-header">
                {imagemUrl && (
                <img src={imagemUrl} className="img-fluid rounded-3" alt={titulo}/>
            )}
            </div>

            <div className="card-body d-flex flex-column p-0 pt-3">
                
                <h5 className="card-title text-center px-3" style={{color: '#023E8A'}}>{titulo}</h5> 
                
                <div className="d-flex justify-content-left align-items-center mb-3 px-3">
                    <span className={`badge ${getStatusBadgeClass(status)}`}>
                        {status}
                    </span>
                </div>

                <a 
                    role="button" 
                    onClick={onButtonClick} 
                    className="btn btn-primary mt-auto rounded-0 d-block w-100 rounded-3" 
                    style={{ backgroundColor: '#3016EB', borderColor: '#3016EB' }} 
                >
                    {textoBotao}
                </a>
            </div>
        </div>
    );
}