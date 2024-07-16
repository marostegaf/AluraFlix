import { MdDelete, MdEdit } from "react-icons/md";
import "./Card.css";
import Modal from "Components/Modal";
import { useState } from "react";
import Campo from "Components/Campo";
import Botao from "Components/Botao";

const Card = ({ video, onSave, onDelete }) => {
    const [editar, setEditar] = useState(false);
    const [titulo, setTitulo] = useState(video.titulo);
    const [categoria, setCategoria] = useState(video.categoria);
    const [imagem, setImagem] = useState(video.imagem);
    const [urlVideo, setUrlVideo] = useState(video.video);

    const handleLimpar = () => {
        setTitulo("");
        setCategoria("");
        setImagem("");
        setUrlVideo("");
    };

    const handleSalvar = () => {
        const updatedVideo = {
            ...video,
            titulo,
            categoria,
            imagem,
            video: urlVideo
        };

        onSave(updatedVideo);
        setEditar(false);
    };

    const handleDeletar = () => {
        onDelete(video.id);
    };

    return (
        <div className="card">
            <a href={video.video} target="_blank" rel="noopener noreferrer">
                <img src={video.imagem} alt={video.titulo} />
            </a>
            <div className="card-botoes">
                <button onClick={handleDeletar} className="card-alinhar">
                    <MdDelete className="icon" />
                    <p>Deletar</p>
                </button>
                <button onClick={() => setEditar(true)} className="card-alinhar">
                    <MdEdit className="icon" />
                    <p>Editar</p>
                </button>
            </div>

            <Modal estaEditando={editar} setEditar={() => setEditar(!editar)}>
                <div className="pagina-video">
                    <h1>EDITANDO VÍDEO</h1>
                    <form className="novo-video">
                        <Campo
                            titulo="Título"
                            placeholder="Digite um título"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                        <Campo
                            titulo="Categoria"
                            placeholder="Digite uma categoria"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        />
                        <Campo
                            titulo="Imagem"
                            placeholder="URL da imagem"
                            value={imagem}
                            onChange={(e) => setImagem(e.target.value)}
                        />
                        <Campo
                            titulo="Vídeo"
                            placeholder="URL do vídeo"
                            value={urlVideo}
                            onChange={(e) => setUrlVideo(e.target.value)}
                        />
                    </form>
                    <div className="pagina-botoes">
                        <Botao text="Salvar" onClick={handleSalvar} />
                        <Botao text="Limpar" onClick={handleLimpar} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Card;
