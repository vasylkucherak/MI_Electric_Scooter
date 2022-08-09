//* зіркові рейтинги

export default function ratings() {
    const ratings = document.querySelectorAll('.rating');

    if (ratings.length > 0) {
        initRatings();

        function initRatings() {
            let ratingActive, ratingValue;
            for (let i = 0; i < ratings.length; i++) {
                const rating = ratings[i];
                initRating(rating);
            }
        }

        function initRating(rating) {
            initRatingVars(rating);
            setRatingActiveWidth();

            if (rating.classList.contains('rating_set')) {
                setRating(rating);
            }
        }

        function initRatingVars(rating) {
            ratingActive = rating.querySelector('.rating__active');
            ratingValue = rating.querySelector('.rating__value');
        }

        function setRatingActiveWidth(index = ratingValue.innerHTML) {
            const ratingActiveWidth = index / 0.05;
            ratingActive.style.width = `${ratingActiveWidth}%`;
        }

        function setRating(rating) {
            const ratingItems = rating.querySelectorAll('.rating__item');
            
            for (let r = 0; r < ratingItems.length; r++) {
                const ratingItem = ratingItems[r];
                ratingItem.addEventListener('mouseenter', function(e) {
                    initRatingVars(rating);
                    setRatingActiveWidth(ratingItem.value);
                });
                ratingItem.addEventListener('mouseleave', function(e) {
                    setRatingActiveWidth();
                });
                ratingItem.addEventListener('click', function(e) {
                    initRatingVars(rating);
                    if(rating.dataset.ajax) {
                        setRatingValue(ratingItem.value, rating);
                    } else {
                        ratingValue.innerHTML = r + 1;
                        setRatingActiveWidth();
                    }
                });
            }
        }

        async function setRatingValue(value, rating) {
            if (!rating.classList.contains('rating_sending')) {
                rating.classList.add('rating_sending');

                let response = await fetch('rating.json', {
                    method: "GET",
                    /* body: JSON.stringify({
                        userRating: value    
                    }),
                    headers: {
                        'content-type': 'application/json'
                    } */
                });

                if (response.ok) {
                    const result = await response.json();
                    const newRating = result.newRating;
                    ratingValue.innerHTML = newRating;
                    setRatingActiveWidth();
                    rating.classList.remove('rating_sending');
                } else {
                    alert('Помилка!!!');
                    rating.classList.remove('rating_sending');
                }
            }
        }
    }
}