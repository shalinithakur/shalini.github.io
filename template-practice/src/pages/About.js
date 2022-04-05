import { SocialIcon } from 'react-social-icons';
function About(){

    return(
             
        <><section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Clarence
                    <span className="text-primary">Taylor</span>
                </h1>
                <div className="subheading mb-5">
                    3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
                    <a href="mailto:name@email.com">name@email.com</a>
                </div>
                <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                <div className="social-icons">
                <SocialIcon url="https://linkedin.com/in/jaketrent" />
                <SocialIcon network="github" bgColor="#ff5a01" />
                 <SocialIcon network="twitter" />
                 <SocialIcon network="facebook" />
                </div>
            </div>
        </section>
        </>
    );
}

export default About;