import { useEffect, useState } from "react";
import Banner from "Components/Banner";
import Titulo from "Components/Titulo";
import "./Inicio.css";
import Card from "Components/Card";

const Inicio = () => {
    const [videos, setVideos] = useState([]);
    const categorias = ["Front End", "Back End", "Mobile"];

    useEffect(() => {
        fetch('http://localhost:5000/videos')
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.error('Erro ao buscar vídeos:', error));
    }, []);

    const aoSalvar = (updatedVideo) => {
        fetch(`http://localhost:5000/videos/${updatedVideo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedVideo)
        })
        .then(response => response.json())
        .then(data => {
            setVideos((prevVideos) =>
                prevVideos.map((video) =>
                    video.id === updatedVideo.id ? updatedVideo : video
                )
            );
        })
        .catch(error => console.error('Erro ao atualizar vídeo:', error));
    };

    const aoDeletar = (id) => {
        fetch(`http://localhost:5000/videos/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setVideos((prevVideos) =>
                prevVideos.filter((video) => video.id !== id)
            );
        })
        .catch(error => console.error('Erro ao deletar vídeo:', error));
    };

    return (
        <>
            <Banner />
            <div className="principal">
                {categorias.map((categoria, index) => (
                    <div key={index}>
                        <Titulo
                            titulo={categoria}
                            corDeFundo={
                                categoria === "Front End"
                                    ? "#6bd1ff"
                                    : categoria === "Back End"
                                    ? "#00c86f"
                                    : "#ffba05"
                            }
                        />
                        <div className="principal-cards">
                            {videos
                                .filter((video) => video.categoria === categoria)
                                .map((video) => (
                                    <li key={video.id}>
                                        <Card
                                            video={video}
                                            onSave={aoSalvar}
                                            onDelete={aoDeletar}
                                        />
                                    </li>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Inicio;
