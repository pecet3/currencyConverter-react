import "./style.css"

const Section = ({content, extraClass}) => (
    <section className={`section ${extraClass}`}>
        {content}
    </section>
);

export default Section;