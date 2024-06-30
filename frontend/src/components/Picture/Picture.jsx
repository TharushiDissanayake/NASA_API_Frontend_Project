import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Picture.css';
import accordiondata from '../../utils/accordion';

const Picture = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.nasa.gov/planetary/apod?api_key=ajgRpg2TuuJgNs98eK8iZTUICVGpkrDbQVNO92Z8'
                );
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="p-wrapper">
            <div className="paddings innerWidth flexCenter p-container">
                {/* left side */}
                <div className="p-left">
                    {data && (
                        <div className="astro-image-container">
                            <img src={data.url} alt="Astro Picture Of the Day" />
                        </div>
                    )}
                </div>

                {/*right side*/}
                <div className="flexColStart p-right">
                    <span className="primaryText">Astronomy Picture Of the Day</span>
                    <span className="secondaryText">
                        Each day a different image or photograph of our fascinating
                        <br />
                        universe is featured, along with a brief explanation written
                        <br />
                        by a professional astronomer.
                    </span>

                    <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                        {accordiondata.map((item, i) => (
                            <AccordionItem className="accordionItem" key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButton">
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    {item.heading === "Picture Title" && (
                                        <p className="secondaryText">{data?.title}</p>
                                    )}
                                    {item.heading === "Image Credit & Copy Writes" && (
                                        <p className="secondaryText">{data?.copyright}</p>
                                    )}
                                    {item.heading === "Explanation" && (
                                        <p className="secondaryText details">{data?.explanation}</p>
                                    )}
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Picture;
