import hero from '../assets/images/hero.png';

function Hero() {
    const social_media_links = [
        {
            icon: 'logo-instagram',
            link: 'https://www.instagram.com/_phii.hung/'
        },
        {
            icon: 'logo-facebook',
            link: 'https://www.facebook.com/phii.hung.280964'
        },
        {
            icon: 'logo-linkedin',
            link: 'https://www.linkedin.com/in/phi-hung-97/'
        },
        {
            icon: 'logo-twitter',
            link: 'https://twitter.com/phi_hung_97'
        }
    ]
    return (
        <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center ">
            <div className="flex-1 items-center justify-center h-full">
                <img
                    src={hero}
                    alt=""
                    className="w-[300px] h-[400px] md:w-[380px] md:h-[500px] mx-auto my-9  bg-cyan-500 rounded-3xl"
                />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1
                        className="md:text-5xl text-2xl md:leading-normal leading-10
                    text-white font-bold"
                    >
                        <span className="text-cyan-600 md:text-6xl text-5xl">Hello!</span>
                        <br />
                        My Name is <span>Phi Hung</span>
                    </h1>
                    <h4
                        className="md:text-2xl text-lg md:leading-normal leading-5 mt-4
                        font-bold text-gray-500"
                    >
                        Front End Developer
                    </h4>
                    <button className="btn-primary mt-8">Contact Me</button>
                    <div
                        className="mt-8 text-3xl flex items-center md:justify-start 
                    justify-center gap-5"
                    >
                        {social_media_links.map((social) => (
                            <a
                                key={social.icon}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-white cursor-pointer inline-block"
                            >
                                <span>
                                    <ion-icon name={social.icon}></ion-icon>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
