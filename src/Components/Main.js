import React from 'react';
import './Main.css';
import Feature from './Feature';
import Work from './Work';
import Testimonial from './Testimonial';
import Development from './Development';
import MobileIcon from './images/mobile-alt.svg';
import DesktopIcon from './images/desktop.svg';
import LaptopIcon from './images/laptop.svg';
import SpinnerIcon from './images/spinner.svg';
import WorkIMG from './images/img-placeholder.png';

const Main = () => {
    const titleFeatures = [
        {
            icon: MobileIcon,
            black: 'superbly',
            normal: 'responsive'
        },
        {
            icon: DesktopIcon,
            black: 'squeeky',
            normal: 'clean'
        },
        {
            icon: LaptopIcon,
            black: 'multi',
            normal: 'purpose'
        },
        {
            icon: SpinnerIcon,
            black: 'highly',
            normal: 'flexible'
        },
    ]
    const renderFeature = titleFeatures.map((feature, index) => <Feature key={index} black={feature.black} normal={feature.normal} icon={feature.icon} />)

    const works = [
        {
            imagePath: WorkIMG,
            title: 'blog title',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.'
        },
        {
            imagePath: WorkIMG,
            title: 'blog title',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.'
        },
        {
            imagePath: WorkIMG,
            title: 'blog title',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.'
        }
    ]
    const renderWork = works.map((work, index) => <Work key={index} imagePath={work.imagePath} title={work.title} content={work.content} />)

    const testimonials = [
        {
            author: 'John Smith',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.'
        },
        {
            author: 'John Smith',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.'
        },
        {
            author: 'John Smith',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.'
        },
        {
            author: 'John Smith',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.'
        },
    ]
    const renderTestimonial = testimonials.map((testimonial, index) => <Testimonial key={index} author={testimonial.author} content={testimonial.content} />)

    return (
        <div className="main">   
            <div className="container feature">
                {renderFeature}                
            </div>
            <h4><span>latest work</span></h4>
            <div className="container work">
                {renderWork}
            </div>
            <div className="container testi-dev">
                <div className="testi">
                    <h4><span>testimonials</span></h4>
                    {renderTestimonial}
                </div>
                <div className="dev">
                    <h4><span>Developments</span></h4>
                    <Development />
                </div>
            </div>
            <div className="container ad">
                <h2>get in touch with us <span className="white">now</span></h2>
                <button>
                    contact us
                </button>
        </div>
        </div>
    )
}

export default Main;
