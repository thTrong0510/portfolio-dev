import { FaFacebook } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

interface Iprops {
    github: string, facebook: string
}

const SocialMedia = (props: Iprops) => {
    const { github, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target='_blank' className="highlight" title="Youtube Hỏi Dân IT">
                <SiGithub size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook Hỏi Dân IT">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;