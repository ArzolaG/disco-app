import { useEffect, useState } from "react";
import "../styles/albums.css";

type AlbumsProps = {
    searchTerm: string;
};

const Albums = ({ searchTerm }: AlbumsProps) => {
    const [artist, setArtist] = useState("");
    const [albums, setAlbums] = useState([]);

    const getToken = async () => {
        const clientId = "id1";
        const clientSecret = "id2";

        const response = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + btoa(`${clientId}:${clientSecret}`), // Encode credentials
            },
            body: "grant_type=client_credentials",
        });

        const data = await response.json();
        return data.access_token; // Return the access token
    };

    const getArtist = async () => {
        try {
            const token = await getToken();
            const response = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setArtist(data.artists.items[0].href);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getAlbums = async () => {
        try {
            const token = await getToken();
            const response = await fetch(`${artist}/albums`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                setAlbums(data.items);
            }
            console.log(albums);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArtist();
        getAlbums();
    }, [searchTerm]);

    return (
        <section className="p-8">
            <div className="grid grid-cols-5 gap-20">
                {albums?.map((album: any) => {
                    return (
                        <>
                            <img src={`${album.images[0].url}`} alt="Test" />
                        </>
                    );
                })}
            </div>
        </section>
    );
};

export default Albums;
