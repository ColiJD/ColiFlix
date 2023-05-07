import './Banner.css';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner-container">
                <div className="banner-title" >
                    <h3 className='banner-titulo'>Challenge React</h3>
                    <p className='banner-parrafo'>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React</p>
                </div>
            </div>
            <video className='banner-video'>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></source>
            </video>
        </section>
    )
}

export default Banner