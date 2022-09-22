import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke,faV } from '@fortawesome/free-solid-svg-icons';

export default function Book() {
    function Star() {
        return (
            <i><FontAwesomeIcon icon={faStar} /></i>
        )
    }

    function HalfStar() {
        return (
            <i><FontAwesomeIcon icon={faStarHalfStroke} /></i>
        )
    }

    function ratings() {
        let containerStar = [];
        for (let i = 0; i < 4; i++) {
            containerStar.push(<li className='star'>{ Star() }</li>)
        }

        containerStar.push(<li className='star'>{ HalfStar() }</li>)
        return (
            <ul id='ul'>{containerStar}</ul>
        )
    }

    return (
        <article className="card--book">
            <img src="https://m.media-amazon.com/images/I/912F2fID5XL._AC_UL320_.jpg" alt="book" className="card--image" />
            
            <section className="card--description">
                <p className="card--title">The 6:20 Man: A Thriller</ p>
                <p className="card--author">by <span className='author--name'>David Baldacci</span></p>

                <div className="card--ratings-sale">
                    <div className="card--ratings">{ratings()}</div>
                    <span><i><FontAwesomeIcon icon={ faV } /></i></span>
                    <p className="card--numberofsell">22,019</p>
                </div>

                <h5 className="book--quality">Hardcover</h5>

                <div className="card--price">
                    <h1 className="book--price"><span className="price--dollar-sign span">$</span>15<span className='span'>39</span></h1>
                    <p className="before--price">$29.00</p>
                </div>

                <h5 className="other--offers">More Buying Choices</h5>
                <p className="other-price-offer">$11.55 <span>(64 used & new offers)</span></p>
            </section>
        </article>
    )
}