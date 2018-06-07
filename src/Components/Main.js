import React, { Component } from 'react';
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

const devs = [
    {
        title: 'The Design',
        content: 'Bacon ipsum dolor amet venison meatloaf tri-tip capicola brisket ham hock. Hamburger drumstick chuck fatback, chicken brisket tongue swine porchetta shank kielbasa leberkas cow pork chop bresaola. Shoulder kielbasa t-bone biltong turducken. Tenderloin buffalo fatback, alcatra spare ribs venison leberkas.'
    },
    {
        title: 'The Production',
        content: 'Pig bresaola buffalo, brisket salami jerky fatback burgdoggen cupim ham hock pork loin doner short loin bacon. Salami tenderloin drumstick ham ground round shank. Corned beef doner shoulder pork porchetta. Beef ball tip flank, biltong alcatra meatloaf burgdoggen landjaeger porchetta pastrami. Burgdoggen shoulder short loin shankle, chicken tail pork andouille porchetta turkey. Ground round kevin turkey pork chop, tri-tip biltong andouille bacon.'
    }
]

class Main extends Component {
    state = {
        title: devs[0].title,
        content: devs[0].content,
    }    

    displayContent(num){
        const title = devs[num].title;
        const content = devs[num].content; 
        this.setState({title, content});
    }

    render(){ 
        const renderFeature = titleFeatures.map((feature, index) => <Feature key={index} black={feature.black} normal={feature.normal} icon={feature.icon} />)

        const renderWork = works.map((work, index) => <Work key={index} imagePath={work.imagePath} title={work.title} content={work.content} />)
        
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
                        <div className="tab">
                            <input type="radio" name="dev" id="dev1" defaultChecked={true} onClick={()=>this.displayContent(0)}/><label htmlFor="dev1" >Design</label>
                            <input type="radio" name="dev" id="dev2" onClick={()=>this.displayContent(1)} /><label htmlFor="dev2">Production</label>
                        </div>
                        <Development title={this.state.title} content={this.state.content} />
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
}

export default Main;
