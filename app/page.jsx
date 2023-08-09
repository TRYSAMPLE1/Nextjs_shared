import Feed from '@components/Feed';
import Nav from '@components/Nav';
import Provider from '@components/Provider'


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text_center">
        Discover and share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI - Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Illo exercitationem quisquam mollitia aut omnis accusamus vel, 
         animi id dignissimos minus cupiditate iure, 
        laboriosam similique hic aspernatur officiis consequuntur adipisci obcaecati?
      </p>

       {/* Feed   */}

      <Feed />


    </section>
  )
}

export default Home