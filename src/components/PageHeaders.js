export default function PageHeaders({
    h1text = '',
    h2text = '',

}){
    return(
        <section className="text-center mt-24 mb-8">
            <h1 className="text-3xl" style={{textShadow: '1px 1px 0 rgba(100,200,300,.5)'}}>
                {h1text}
            </h1>
            <h2 className="text-l text-white/65">
                {h2text}
            </h2>
          </section>
    );
}