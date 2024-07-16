import { useState } from "react";
import Campo from "Components/Campo";
import Botao from "Components/Botao";
import "./NovoVideo.css"

const NovoVideo = ({ onAdd }) => {
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [urlVideo, setUrlVideo] = useState("");

    const handleLimpar = () => {
        setTitulo("");
        setCategoria("");
        setImagem("");
        setUrlVideo("");
    };

    const handleAdicionar = async () => {
        const novoVideo = {
            titulo,
            categoria,
            imagem,
            video: urlVideo
        };

        try {
            const response = await fetch('http://localhost:5000/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoVideo)
            });

            if (response.ok) {
                const videoCriado = await response.json();
                if (onAdd) {
                    onAdd(videoCriado);
                }
                handleLimpar();
            } else {
                console.error("Erro ao adicionar o vídeo:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao adicionar o vídeo:", error);
        }
    };

    return (
        <div className="pagina-video">
            <h1>ADICIONAR NOVO VÍDEO</h1>
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
                    titulo="URL do Vídeo"
                    placeholder="URL do vídeo"
                    value={urlVideo}
                    onChange={(e) => setUrlVideo(e.target.value)}
                />
                <div className="botoes">
                    <Botao text="Limpar" onClick={handleLimpar} />
                    <Botao text="Adicionar" onClick={handleAdicionar} />
                </div>
            </form>
        </div>
    );
};

export default NovoVideo;
