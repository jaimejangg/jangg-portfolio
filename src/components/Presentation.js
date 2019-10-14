import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../routes/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Presentation() {
    return(
        <section className='sections-container'>
            <section className='presentation'>
                <div className='section-text-container'>
                    <div className='title-text'>
                    <div className='text-div'>
                        <h1>My name is Jaime Rueda</h1>
                    </div>
                    <div className='icons-div'>
                        <a 
                        href='https://github.com/JaimeJangg' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='links'
                        >
                        <FontAwesomeIcon icon={faGithubSquare} />
                        </a>
                        <a 
                        href='https://www.facebook.com/jaime.jangg' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='links'
                        >
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                        <a 
                        href='https://twitter.com/jaimejangg' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='links'
                        >
                        <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                        <a 
                        href='https://www.instagram.com/therealjangg/' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='links'
                        >
                        <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    </div>
                    <div className='text'>
                    <p>Im a FullStack Javascript developer specialized in React JS.</p>
                    <p>
                        I am a developer passionate about helping communities 
                        build innovative technology solutions for their problems.
                        I like to learn the technologies fast but also to dedicate 
                        them study time to understand them in depth, 
                        I also like politics and economics, I have a degree in 
                        international business and I have a specialty in software.
                    </p>
                    <Link 
                        to={ROUTES.BLOG} 
                        style={{ textDecoration: 'none', color: '#373a47' }}
                    >
                        <h3 className="baby-steps">Baby Steps Blog</h3>
                    </Link>
                    </div>
                </div>
            </section>
      </section>
    );
}

export default Presentation;