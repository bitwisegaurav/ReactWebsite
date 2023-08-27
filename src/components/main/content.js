export default function Content(){

    // create a object with a heading and a paragraph
    let content = [
        {
            heading: "Learn programming with us",
            image : "https://images.unsplash.com/photo-1653138956520-c700df007734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
            paragraph: "Discover the world of programming with us. We have a wide range of courses on programming languages and web development. From frontend technologies like HTML, CSS and Javascript to backend technologies like NodeJS, ExpressJS, Php and database such as PL/SQL, MYSQL, C/C++, Java, and many more. Join us and get started on your coding your coding journey with us."
        },
        {
            heading: "Our Courses",
            image : "https://images.unsplash.com/photo-1670821910930-3135e33820bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
            paragraph: "Exlore our wide range of courses on programming languages and web development. From frontend technologies like HTML, CSS and Javascript to backend technologies like NodeJS, ExpressJS, Php and database such as PL/SQL and MYSQL, we have it all covered. Get started on your coding your coding journey with us."
        },
        {
            heading: "Couse details",
            image : "https://images.unsplash.com/photo-1638139740740-0ce3696ae14a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            paragraph: "Our courses are designed to be beginner friendly. We have a wide range of courses on programming languages and web development. From frontend technologies like HTML, CSS and Javascript to backend technologies like NodeJS, ExpressJS, Php and database such as PL/SQL and MYSQL, we have it all covered. Get started on your coding your coding journey with us."
        },
    ];

    return(
        <div className="content" id="content">
            {content.map((item, index) => (
                <div className="content-section">
                    <div className="content-section-image" key={index}>
                        <div className="content-section-image-overlay">
                            <img src={item.image} alt="Code" />
                        </div>
                    </div>
                    <div className="content-section-item" key={index}>
                        <h2 className="content-section-item-heading">{item.heading}</h2>
                        <p className="content-section-item-paragraph">{item.paragraph}</p>
                    </div>
                </div>
            ))};
        </div>
    );
}