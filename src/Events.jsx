import React from 'react'
import Post from './components/Post'
import TestPost from './components/TestPost'
import about1 from './components/assets/about_01.jpg'
import header1 from './components/assets/header_01.jpg'

const Events = () => {

    
    return (
        <div>
            <TestPost 
                image={about1}
                title="Test Post"
                date="Onsdag 08.09.2021, kl.18:00"
                author="Gløshaugen"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros purus, consequat non metus at, fermentum consequat felis. Proin laoreet, sapien ac sodales dictum, odio tellus eleifend enim, quis suscipit elit dolor vel felis. Praesent quis lectus sed nisi luctus molestie. Aliquam erat volutpat. Fusce consequat placerat scelerisque. Fusce ut urna vehicula, dapibus sapien vitae, eleifend ante. Etiam quam felis, laoreet sed accumsan in, interdum vitae metus. Praesent iaculis urna arcu, ut placerat justo consequat ac. Mauris mauris erat, iaculis non leo vehicula, tincidunt lacinia odio.
                
                Nulla at convallis lacus, nec malesuada eros. Sed pellentesque et ex eget euismod. Donec eget ligula quis ante blandit porta. Vivamus non blandit turpis. Donec diam ante, sollicitudin a elit id, placerat vulputate lectus. Curabitur facilisis neque quis blandit rutrum. Pellentesque laoreet erat lacus, eget aliquet dui volutpat eu. Nam ut erat velit. Integer fringilla, tellus at semper hendrerit, nulla augue interdum sapien, vel maximus enim libero nec enim. Sed vestibulum sit amet nibh vel imperdiet. Nunc sed egestas elit, non rutrum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In blandit justo id lorem dapibus blandit id quis nibh. In fringilla vehicula est, quis convallis arcu molestie nec."
                button="Meld deg på arrangementet" 
                link="https://facebook.com"        
            />

            <TestPost
                image={header1}
                title="Test Post with a long ass title! :-)"
                date="Onsdag 08.09.2021, kl. 19:00"
                author="Drivhuset"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros purus, consequat non metus at, fermentum consequat felis. Proin laoreet, sapien ac sodales dictum, odio tellus eleifend enim, quis suscipit elit dolor vel felis. Praesent quis lectus sed nisi luctus molestie. Aliquam erat volutpat. Fusce consequat placerat scelerisque. Fusce ut urna vehicula, dapibus sapien vitae, eleifend ante. Etiam quam felis, laoreet sed accumsan in, interdum vitae metus. Praesent iaculis urna arcu, ut placerat justo consequat ac. Mauris mauris erat, iaculis non leo vehicula, tincidunt lacinia odio.
                
                Nulla at convallis lacus, nec malesuada eros. Sed pellentesque et ex eget euismod. Donec eget ligula quis ante blandit porta. Vivamus non blandit turpis. Donec diam ante, sollicitudin a elit id, placerat vulputate lectus. Curabitur facilisis neque quis blandit rutrum. Pellentesque laoreet erat lacus, eget aliquet dui volutpat eu. Nam ut erat velit. Integer fringilla, tellus at semper hendrerit, nulla augue interdum sapien, vel maximus enim libero nec enim. Sed vestibulum sit amet nibh vel imperdiet. Nunc sed egestas elit, non rutrum sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In blandit justo id lorem dapibus blandit id quis nibh. In fringilla vehicula est, quis convallis arcu molestie nec."
                button="Meld deg på arrangementet"
            />
        </div>
    )
}

export default Events
