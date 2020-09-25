import React, {useEffect, useState} from 'react';
import Card from '../Card/Card';
import './CardContainer.scss';
import leia from '../../assets/Leia_Organa.png';
import lara from '../../assets/laraCroft.png';
import ww from '../../assets/ww.png';

const data = [
    {
        background : leia,
        title: "General Leia Organa",
        body: "Leia is the most powerful female figurehead in the Star Wars franchise. This year she will take her final bow in Star Wars: The Last Jedi, as fans celebrate actress Carrie Fisher’s legacy one last time."
    },
    {
        background: ww,
        title: "Wonder Woman",
        body: "Diana Prince is the most recognizable female superhero in the world. Her debut film Wonder Woman is the highest grossing superhero origin film of all time. Created in 1941 and beloved for over 76 years, Diana Prince is a strong, compassionate role model for men and women everywhere."
    },
    {
        background: lara,
        title: "Lara Croft",
        body: "This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures."
    }
];

const CardContainer = ({cardIndex}) => {
    const [pixels, setPixels] = useState(85);

    useEffect(() => {
        switch(cardIndex) {
            case 0: setPixels(85);break;
            case 1: setPixels(-250);break;
            case 2: setPixels(-600);break;
        }
    }, [cardIndex]);

    return (
        <section className="cards-container">
            <div className="cards-container-hidden" style={{transform: `translateX(${pixels}px)`}}>
                {
                    data.map(cardData => {
                        return(
                            <Card
                                background={cardData.background}
                                title={cardData.title}
                                body={cardData.body}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
};

export default CardContainer;
