import Hero from "../../component/Hero/Hero";
import Section from "../../component/Section";
import BookStore from "../Service/BookStore";
// import Service from "../Service/Service";

export default function Home() {
  return (
    <>  
      <Hero/>
      <Section/>
      <BookStore></BookStore>
    </>
  )
}
