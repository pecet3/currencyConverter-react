import "./style.css"

const Section = ({content, extraClass}) => (
    <section className={`section ${extraClass}`}>
    <p>
        {content}
    </p>
    </section>
);

export default Section;