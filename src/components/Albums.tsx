import "../styles/albums.css";
const Albums = () => {
    return (
        <section className="p-8">
            <div className="flex gap-20">
                <div className="w-full">
                    <img src="/images/rhcp/bssm.webp" alt="BSSM" />
                    <p>Blood Sugar Sex Magik</p>
                    <span>1991</span>
                </div>
                <div className="w-full">
                    <img src="/images/rhcp/bytheway.webp" alt="BSSM" />
                    <p>By The Way</p>
                    <span>2002</span>
                </div>
                <div className="w-full">
                    <img src="/images/rhcp/californication.webp" alt="BSSM" />
                    <p>Californication</p>
                    <span>1999</span>
                </div>
                <div className="w-full">
                    <img src="/images/rhcp/unlimited-love.webp" alt="BSSM" />
                    <p>Unlimited Love</p>
                    <span>2022</span>
                </div>
            </div>
        </section>
    );
};

export default Albums;
